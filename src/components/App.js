import './App.css';
import { useEffect } from 'react';
import { axiosData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    const imgURL = (img) => {
      return `http://openweathermap.org/img/wn/${img}@2x.png`
    } 

    const dispatch = useDispatch();
    const store = useSelector(store => store.data);

    console.log(store);

    useEffect(() => {
      dispatch(axiosData())
    }, [])

  return (
    <div className="App">
      {
        store && 
          store.map(item => (
            <div className='wrapper__content'>
              <div className="wrapper__flex">
              
              {/* Main title */}
              <h1 className="wrapper__title">Belarus</h1>

              {/* Main card with information about temp now and img weather */}
              <div className="card__temp">
                <img src={imgURL(item.weather[0].icon)} alt="" />
                <div className="card__inform">
                  <p className="card__suptitle">Rain</p>
                  <p className="card__title">29&deg;C</p>
                </div>  
              </div>

              {/* Informative about weather */}
              <div className="information">

                <div className="air__quality">
                  <img src={imgURL(item.weather[0].icon)} alt="" />
                  <p className="inform__title">147</p>
                  <p className="inform__suptitle">air quality</p>
                </div>
              
                <div className="air__quality">
                  <img src={imgURL(item.weather[0].icon)} alt="" />
                  <p className="inform__title">147</p>
                  <p className="inform__suptitle">air quality</p>
                </div>
              
                <div className="air__quality">
                  <img src={imgURL(item.weather[0].icon)} alt="" />
                  <p className="inform__title">147</p>
                  <p className="inform__suptitle">air quality</p>
                </div>
              
                <div className="air__quality">
                  <img src={imgURL(item.weather[0].icon)} alt="" />
                  <p className="inform__title">147</p>
                  <p className="inform__suptitle">air quality</p>
                </div>
              
                <div className="air__quality">
                  <img src={imgURL(item.weather[0].icon)} alt="" />
                  <p className="inform__title">147</p>
                  <p className="inform__suptitle">air quality</p>
                </div>
              
                <div className="air__quality">
                  <img src={imgURL(item.weather[0].icon)} alt="" />
                  <p className="inform__title">147</p>
                  <p className="inform__suptitle">air quality</p>
                </div>

              </div>

              {/* Information about sunrise and sunset */}
              <div className="sun__rise-set">
                <div className="sunrise"></div>
                <div className="imgsun__rise-set"></div>
                <div className="sunset"></div>
              </div>

              {/* <h1>{item.name}</h1>

              <p>{Math.floor((item.main.temp) - 273)}&deg;C</p>
              <p>{Math.floor(item.sys.sunrise % 24)}.{Math.floor(item.sys.sunrise % 60)}</p>
              <p>{Math.floor(item.sys.sunset % 24)}.{Math.floor(item.sys.sunset % 60)}</p>
              <img src={imgURL(item.weather[0].icon)} alt="" />
               */}
              </div>
            </div>  
            ) )
      }
    </div>
  );
}

export default App;
