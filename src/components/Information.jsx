


// FontAwasomeIcon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faFireFlameSimple } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";


function Information({city, lang}) {

    console.log(city);

    return (
        <div className="information">

            <div className="information_blog">
                <FontAwesomeIcon icon={faSeedling} className='fa-icons'/>
                <p className="inform__title">{city.main.humidity}</p>
                <p className="inform__suptitle">{lang === 'en' ? "humidity" : "влажность"}</p>
            </div>
            
            <div className="information_blog">
                <FontAwesomeIcon icon={faGauge} className='fa-icons'/>
                <p className="inform__title">{city.main.pressure}hpa</p>
                <p className="inform__suptitle">{lang === 'en' ? "pressure" : "давление"}</p>
            </div>
            
            <div className="information_blog">
                <FontAwesomeIcon icon={faCloud} className='fa-icons'/>
                <p className="inform__title">{city.clouds ? city.clouds["all"] : 0}</p>
                <p className="inform__suptitle">{lang === 'en' ? "clouds" : "облака"}</p>
            </div>
            
            <div className="information_blog">
                <FontAwesomeIcon icon={faFireFlameSimple} className='fa-icons'/>
                <p className="inform__title">{city.rain ? city.rain["1h"] : 0}mm</p>
                <p className="inform__suptitle">{lang === 'en' ? "precipitation" : "осадки"}</p>
            </div>
            
            <div className="information_blog">
                <FontAwesomeIcon icon={faWind} className='fa-icons' />
                <p className="inform__title">{Math.floor(city.wind.speed)}km/h</p>
                <p className="inform__suptitle">{lang === 'en' ? "wind" : "ветер"}</p>
            </div>
            
            <div className="information_blog">
                <FontAwesomeIcon icon={faEye} className='fa-icons'/>
                <p className="inform__title">{(city.visibility / 1000)}km</p>
                <p className="inform__suptitle">{lang === 'en' ? "visibility" : "видимость"}</p>
            </div>

        </div>
    )
}

export default Information