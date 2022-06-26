import { combineReducers } from "redux";
import { getData } from "./getDataReducer";
import { setLang } from "./setLanguageReducer";

export default combineReducers({
    data: getData,
    lang: setLang,
});
