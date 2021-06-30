import { combineReducers } from "redux";
import auth from './authReducer'
import alert from './alerteReducer'
import toast from './toastReducer'

export default combineReducers({
    auth,
    alert,
    toast
})