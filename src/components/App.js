import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { axiosData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

import Search from './Search';
import Main from './Main';


function App() {

  const dispatch = useDispatch();
  const {data, id_country, lang} = useSelector(store => store);

  useEffect(() => {
    dispatch(axiosData(id_country, lang))
  }, [id_country, lang]);

  return (

    <div className="App">

      { 
        data && 
          data.map((city, index) => (
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
