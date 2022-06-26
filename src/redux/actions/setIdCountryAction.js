import { SET_ID_COUNTRY } from './actionTypes';

export const setIdCountry = (id_country) => {
    return {
        type: SET_ID_COUNTRY,
        payload: id_country,
    }
}