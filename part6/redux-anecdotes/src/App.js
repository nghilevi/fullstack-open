import React, { useEffect } from 'react'

// import { setAnecdotes } from './reducers/anecdoteReducer'

import { initializeAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

// import anecdotesService from './services/anecdotes'
import store from './store'

const App = () => {
  
  useEffect(() => {
    store.dispatch(initializeAnecdotes())
  },[])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App