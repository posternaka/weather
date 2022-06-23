import { combineReducers } from "redux";
import { getData } from "./getDataReducer";

export default combineReducers({
    data: getData
});
