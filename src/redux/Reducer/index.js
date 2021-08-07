import { combineReducers } from "redux";
import authReducer from "../../components/AdminComp/AuthPage/modules/reducer";
const rootReducer = combineReducers({
    authReducer,
});
export default rootReducer;
