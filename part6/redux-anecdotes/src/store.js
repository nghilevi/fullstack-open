
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      notifications: notificationReducer
    }
})

export default store