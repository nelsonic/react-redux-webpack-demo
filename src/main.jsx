import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import shoppingReducer from './reducers/shopping-reducer.js'
if (process.browser) require('./main.css')

let store = createStore(shoppingReducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
