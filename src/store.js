import { createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { populateCharactersReducer } from "./reducers/populateCharactersReducer";

const reducer = combineReducers({
    populateCharacters: populateCharactersReducer,
})

const initialState = {}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
window.store = store
export default store
