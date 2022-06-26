import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { axiosData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

import Search from './Search';
import Main from './Main';


function App() {

  const dispatch = useDispatch();
  const store = useSelector(store => store.data);
  const lang = useSelector(store => store.lang);
  const id_country = useSelector(store => store.id_country);

  useEffect(() => {
    dispatch(axiosData(id_country, lang))
  }, [id_country]);

  return (

    <div className="App">

      { 
        store && 
          store.map((city, index) => (
            <div key={index+city} className='wrapper__content'>

              <BrowserRouter> 
                <Routes>

                  {/* Search component and show results */}
                  <Route path="/" element={<Search />} />
              
                  <Route path="/content" element={<Main city={city} lang={lang} />} />

                </Routes>
              </BrowserRouter>

            </div>  
          )
        )
      }

    </div>
  )

}

export default App;
