import { GET_DATA } from './actionTypes';
import axios from 'axios';

export const axiosData = () => async (dispatch) => {
    try {
        const data = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=54&lon=28&appid=fcd7780b300a0d0160ee4aef2084c4a8');

        dispatch(getData(data))
    }
    catch {
        throw new Error('Oooops...')
    }
}

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data,
    };
};