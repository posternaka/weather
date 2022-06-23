import './App.css';
import { useEffect } from 'react';
import { axiosData } from '../redux/actions/getDataAction';
import { useDispatch, useSelector } from 'react-redux';

function App() {
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
            <>
              <h1>{item.name}</h1>

              <p>{Math.floor((item.main.temp) - 273)}&deg;C</p>
              <p>{Math.floor(item.sys.sunrise % 24)}.{Math.floor(item.sys.sunrise % 60)}</p>
              <p>{Math.floor(item.sys.sunset % 24)}.{Math.floor(item.sys.sunset % 60)}</p>
            </>
            ) )
      }
    </div>
  );
}

export default App;
