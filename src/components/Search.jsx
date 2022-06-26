import { useState } from "react";


function Search() {
    const countries = [{country: 'belarus', id: '630336'}, {country: 'russia', id: '2017370'},];
    const [findCountries, setFindCountries] = useState('');

    const handleFindCountries = countries.filter(country => {
        return country.country.toLocaleLowerCase().includes(findCountries.toLocaleLowerCase());
    });


    return (
    <>
        <input type="text" onChange={(e) => setFindCountries(e.target.value)}/>

        <div className="information">
        { 
            handleFindCountries.map((country, index) => (
                <div key={index+country} className="information_blog">
                    <p className="inform__suptitle">{country.country}</p>
                </div>
            ))
        }
        </div>
    </>
    )
}

export default Search