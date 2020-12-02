import { createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = () => { return 'a'}

const initialState = {}

const store = createStore(reducer, initialState, composeWithDevTools)
window.store = store
export default store
