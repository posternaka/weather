

function MainInformation({city}) {
    const imgURL = (img) => {
        return `https://openweathermap.org/img/wn/${img}@2x.png`
    } 

    return (
    <div className="card__temp">
        <img src={imgURL(city.weather[0].icon)} alt={city.weather[0].description} />
        <div className="card__inform">
            <p className="card__suptitle">{Math.floor((city.main.temp) - 273)}&deg;</p>
            <p className="card__title">{city.weather[0].description}</p>
        </div>  
    </div>
    )
}

export default MainInformation