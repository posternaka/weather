import './App.css';
import { useEffect } from 'react';
import { axiosData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faFireFlameSimple } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";


function App() {
  
    const dispatch = useDispatch();
    const store = useSelector(store => store.data);

    const countries = [
      
    ]
    
    const imgURL = (img) => {
      return `http://openweathermap.org/img/wn/${img}@2x.png`
    } 
    console.log(store);

    useEffect(() => {
      dispatch(axiosData(630336))
    }, [])

  return (
    <div className="App">
      {
        store && 
          store.map(city => (
            <div className='wrapper__content'>
              <div className="wrapper__flex">
              
              {/* Main title */}
              <h1 className="wrapper__title">{city.name}</h1>

              {/* Main card with information about temp now and img weather */}
              <div className="card__temp">
                <img src={imgURL(city.weather[0].icon)} alt={city.weather[0].description} />
                <div className="card__inform">
                  <p className="card__suptitle">{Math.floor((city.main.temp) - 273)}&deg;</p>
                  <p className="card__title">{city.weather[0].description}</p>
                </div>  
              </div>

              {/* Informative about weather */}
              <div className="information">

                <div className="information_blog">
                  <FontAwesomeIcon icon={faSeedling} className='fa-icons'/>
                  <p className="inform__title">{city.main.humidity}</p>
                  <p className="inform__suptitle">Humidity</p>
                </div>
              
                <div className="information_blog">
                  <FontAwesomeIcon icon={faGauge} className='fa-icons'/>
                  <p className="inform__title">{city.main.pressure}hpa</p>
                  <p className="inform__suptitle">Pressure</p>
                </div>
              
                <div className="information_blog">
                  <FontAwesomeIcon icon={faCloud} className='fa-icons'/>
                  <p className="inform__title">{city.clouds ? city.clouds["all"] : 0}</p>
                  <p className="inform__suptitle">Clouds</p>
                </div>
              
                <div className="information_blog">
                  <FontAwesomeIcon icon={faFireFlameSimple} className='fa-icons'/>
                  <p className="inform__title">{city.rain ? city.rain["1h"] : 0}mm</p>
                  <p className="inform__suptitle">Precipitation</p>
                </div>
              
                <div className="information_blog">
                  <FontAwesomeIcon icon={faWind} className='fa-icons' />
                  <p className="inform__title">{Math.floor(city.wind.speed)}km/h</p>
                  <p className="inform__suptitle">Wind</p>
                </div>
              
                <div className="information_blog">
                  <FontAwesomeIcon icon={faEye} className='fa-icons'/>
                  <p className="inform__title">{(city.visibility / 1000)}km</p>
                  <p className="inform__suptitle">Visibility</p>
                </div>

              </div>

              {/* Information about sunrise and sunset */}
              <div className="sun__rise-set">
                <div className="sunrise">
                  <p className="time__sunrise">{Math.floor(city.sys.sunrise % 24)}:{Math.floor(city.sys.sunrise % 60)}</p>
                  <p className="title__sunrise">SUNRISE</p>
                </div>
                <FontAwesomeIcon icon={faClock} className='fa-clock'/>
                <div className="sunset">
                  <p className="time__sunset">{Math.floor(city.sys.sunset % 24)}:{Math.floor(city.sys.sunset % 60)}</p>
                  <p className="title__sunset">SUNSET</p>
                </div>
              </div>
      
              </div>
            </div>  
            ) )
      }
    </div>
  );
}

export default App;
