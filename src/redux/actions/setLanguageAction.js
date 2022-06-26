import { SET_LANG } from './actionTypes';

export const setLang = (lang) => {
    return {
        type: SET_LANG,
        payload: lang,
    }
}