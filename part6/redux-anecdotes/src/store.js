
import anecdoteReducer, { appendAnecdote } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import {configureStore} from '@reduxjs/toolkit'

import anecdotesService from './services/anecdotes'

const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      notifications: notificationReducer
    }
})

anecdotesService.getAll().then(anecdotes => // step 4
  anecdotes.forEach(anecdote => {
    store.dispatch(appendAnecdote(anecdote))
  })
)

export default store