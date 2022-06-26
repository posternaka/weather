import { SET_LANG } from "../actions/actionTypes";

export const setLang = (state = 'en', action) => {
    switch(action.type) {
        case SET_LANG: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}