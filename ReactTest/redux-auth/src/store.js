import {applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "./Reducers/index"

const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

const store = createStore(rootReducer,middlewareEnhancer)

store.subscribe(() => console.log(store.getState()))

export default store;