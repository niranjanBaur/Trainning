import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
// const configureStore = require('@reduxjs/toolkit').configureStore


import rootReducer from "./Reducer"

const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(rootReducer,middlewareEnhancer)
// const store = configureStore(rootReducer)

export default store;
