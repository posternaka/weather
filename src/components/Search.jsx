import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIdCountry } from "../redux/actions/setIdCountryAction";


function Search() {
    const countries = require('../data.json');
    // console.log(countries);

    const dispatch = useDispatch();

    const [findCountries, setFindCountries] = useState('');

    const handleFindCountries = countries.filter(country => {
            return country.country.toLocaleLowerCase().includes(findCountries.toLocaleLowerCase())
        });

    const handleMap = (country, index) => (
        <Link 
            key={index+country} 
            to="/content" 
            onClick={() => dispatch(setIdCountry(country.id))}
        >
            <div 
                key={index+country} 
                className="search_blog"
            >
                <p 
                    className="inform__suptitle" 
                    
                >
                    {country.country}
                </p>
            </div>
        </Link>
    )

    console.log(handleFindCountries);

    return (
    <div className="search">

        <input 
            type="text" 
            placeholder="Например Belarus" 
            onChange={(e) => setFindCountries(e.target.value)} 
        />

        <div className="information search_info">

            {
                handleFindCountries.length 
                ? handleFindCountries
                    .map((country, index) => (
                        handleMap(country, index)
                    ))
                : <div className="search_nothing">Никаих совпадений</div>
            }

        </div>
    </div>
    )
}

export default Search