import authReducer from "./authReducers";

import {combineReducers } from "redux"

const rootReducer = combineReducers({
    authReducer
})

export default rootReducer