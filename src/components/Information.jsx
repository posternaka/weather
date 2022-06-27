


// FontAwasomeIcon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faFireFlameSimple } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";


function Information({city, lang}) {

    const defaultDiv = (icon, params, en, ru, character = '') => {
        return (
            <div className="information_blog">
                <FontAwesomeIcon icon={icon} className='fa-icons'/>
                <p className="inform__title">{params}{character}</p>
                <p className="inform__suptitle">{lang === 'en' ? en : ru}</p>
            </div>
        )
    }

    return (
        <div className="information">

            {defaultDiv(faSeedling, city.main.humidity, "humidity", "влажность")}
            
            {defaultDiv(faGauge, city.main.pressure, "pressure", "давление")}
            
            {defaultDiv(faCloud, city.clouds ? city.clouds["all"] : 0, "clouds", "облачность")}
            
            {defaultDiv(faFireFlameSimple, city.rain ? city.rain["1h"] : 0, "precipitation", "осадки", 'mm')}
            
            {defaultDiv(faWind, Math.floor(city.wind.speed), "wind", "ветер", 'km/h')}
            
            {defaultDiv(faEye, (city.visibility / 1000), "visibility", "видимость", 'km')}

        </div>
    )
}

export default Information