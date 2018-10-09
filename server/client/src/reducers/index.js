// reducers index.js file
import { combineReducers } from "redux";
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});
