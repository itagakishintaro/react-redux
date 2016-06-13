require( '../scss/common.scss' );

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from './reducers'
import App from './components/App'

let store = createStore( app )

store.subscribe( () =>
    console.log( store.getState() )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
