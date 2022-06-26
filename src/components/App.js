import './App.css';
import { useEffect } from 'react';
import { axiosData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

import Languages from './Languages';
import Information from './Information';
import Footer from './Footer';
import Search from './Search';
import MainInformation from './MainInformation';


function App() {

  const dispatch = useDispatch();
  const store = useSelector(store => store.data);
  const lang = useSelector(store => store.lang);

  useEffect(() => {
    dispatch(axiosData(630336, lang))
  }, [])

  return (
    <div className="App">

      

      { 
        store && 
          store.map((city, index) => (
            <div key={index+city} className='wrapper__content'>

              {/* Search component and show results */}
              <Search />

              <Languages />

              <div className="wrapper__flex">
              
                {/* Main title */}
                <h1 className="wrapper__title">{city.name}</h1>
                
                {/* Main card with information about temp now and img weather */}
                <MainInformation city={city} />

                {/* Informative about weather */}
                <Information city={city} lang={lang} />

                {/* Information about sunrise and sunset */}
                <Footer city={city} lang={lang} />

              </div>
            </div>  
          )
        )
      };

    </div>
  );
}

export default App;
