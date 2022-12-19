// import todoReducer from "./todoReducer";
import thunkReducer from './thunkReducer'


import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    // todoReducer
    thunkReducer
})

export default rootReducer