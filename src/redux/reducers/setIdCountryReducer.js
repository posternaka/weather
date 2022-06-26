import { SET_ID_COUNTRY } from "../actions/actionTypes";

export const setIdCountry = (state = 630336, action) => {
    switch(action.type) {
        case SET_ID_COUNTRY: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}