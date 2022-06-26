import { combineReducers } from "redux";
import { getData } from "./getDataReducer";
import { setLang } from "./setLanguageReducer";
import { setIdCountry } from "./setIdCountryReducer"

export default combineReducers({
    data: getData,
    lang: setLang,
    id_country: setIdCountry,
});
