import LoginStateReducer from "./Reducers/Auth/LoginStateReducer";
import UIReducer from "./Reducers/UI/UIReducer";
import { combineReducers } from "redux";

const AllReducers = combineReducers({
    Login: LoginStateReducer,
    UIData: UIReducer

});
export default AllReducers;
