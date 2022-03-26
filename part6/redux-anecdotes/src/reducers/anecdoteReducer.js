import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // shorthand for a function assigned to the method's name.
    addAnecdote(state, action){ // obsolete
      state.push({
        content: action.payload,
        votes: 0,
        id: getId(),
      })
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    updateVote(state, action){
      const id = action.payload
      const contentToChange = state.find(contentObj => contentObj.id === id)
      const changedContent = {
        ...contentToChange,
        votes: contentToChange.votes+1
      }
      return state.map(contentObj => contentObj.id === id ? changedContent : contentObj)
    },
    updateAnecdote(state, action){
      const updatedAnecdote = action.payload
      return state.map(contentObj => contentObj.id === updatedAnecdote.id ? updatedAnecdote : contentObj)
    },
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = anecdoteContent => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(anecdoteContent)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.addVote(anecdote)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export const { addAnecdote, updateAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer