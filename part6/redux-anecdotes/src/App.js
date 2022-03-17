import React, { useEffect } from 'react'

import { setAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

import anecdotesService from './services/anecdotes'
import store from './store'

const App = () => {
  
  useEffect(() => {
    // Await only works inside async functions, and the code in index.js is not inside a function
    anecdotesService.getAll().then(anecdotes => {
      store.dispatch(setAnecdotes(anecdotes))
    })
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