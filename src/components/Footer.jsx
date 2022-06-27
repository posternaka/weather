// FontAwasomeIcon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";


function Footer({city, lang}) {

    const sunrise = new Date(Math.floor((city.sys.sunrise + city.timezone)*1000));
    const correctSN = sunrise.getUTCHours() + ":" + sunrise.getMinutes();
    const sunset = new Date(Math.floor((city.sys.sunset + city.timezone)*1000));
    const correctSS = sunset.getUTCHours() + ":" + sunset.getMinutes();

    return (
    <div className="sun__rise-set">

        <div className="sunrise">
            {/* <p className="time__sunrise">{Math.floor(city.sys.sunrise % 12)}:{Math.floor(city.sys.sunrise % 60)}</p> */}
            <p className="time__sunrise">{correctSN}</p>
            <p className="title__sunrise">{lang === 'en' ? "sunrise" : "рассвет"}</p>
        </div>
        <FontAwesomeIcon icon={faClock} className='fa-clock'/>
        <div className="sunset">
            {/* <p className="time__sunset">{Math.floor(city.sys.sunset % 24)}:{Math.floor(city.sys.sunset % 60)}</p> */}
            <p className="time__sunset">{correctSS}</p>
            <p className="title__sunset">{lang === 'en' ? "sunset" : "закат"}</p>
        </div>

    </div>
    )
}

export default Footer;