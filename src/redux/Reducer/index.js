import { combineReducers } from "redux";
import movieReducer from "../../containers/HomeTemplate/HomePage/modules/reducer";

const rootReducer = combineReducers({ movieReducer });
export default rootReducer;
