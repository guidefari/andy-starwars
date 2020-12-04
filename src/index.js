import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import App from './App.js'
import './index.css'
import 'regenerator-runtime/runtime'

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)


// render(<App />, document.getElementById('root'));