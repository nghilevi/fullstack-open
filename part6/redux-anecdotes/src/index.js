import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    anecdotes: reducer
  }
})

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

renderApp()

store.subscribe(renderApp)
