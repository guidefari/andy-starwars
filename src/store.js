import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = {}

const initialState = {}

const store = createStore(reducer, initialState, composeWithDevTools)

export default store
