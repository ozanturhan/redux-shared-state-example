import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { GlobalStateProvider } from 'global-context';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </Provider>,
  document.getElementById('root')
)
