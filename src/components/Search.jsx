import { useState } from "react";
import countries from "../data";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIdCountry } from "../redux/actions/setIdCountryAction";


function Search() {
    const dispatch = useDispatch();

    const [findCountries, setFindCountries] = useState('');

    const handleFindCountries = countries.filter(country => {
        return country.country.toLocaleLowerCase().includes(findCountries.toLocaleLowerCase());
    });


    return (
    <div className="search">
        <input 
            type="text" 
            placeholder="Например Belarus" 
            onChange={(e) => setFindCountries(e.target.value)} 
        />

        <div className="information search_info">

            {   
                findCountries.length < 1 
                ? <p className="search_placeholder">
                    Выберите страну
                </p>
                : handleFindCountries
                    .map((country, index) => (
                        <Link key={index+country} to="/content" onClick={() => dispatch(setIdCountry(country.id))}>
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
                    ))
            }

        </div>
    </div>
    )
}

export default Search