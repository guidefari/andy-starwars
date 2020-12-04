import { createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { populateCharactersReducer } from "./reducers/populateCharactersReducer";

const reducer = combineReducers({
    characters: populateCharactersReducer,
})

const initialState = {}
const middleware = [thunk]


const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store
