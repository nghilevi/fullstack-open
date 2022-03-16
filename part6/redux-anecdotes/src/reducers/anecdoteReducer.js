import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addAnecdote(state, action){ // shorthand for a function assigned to the method's name.
      state.push({
        content: action.payload,
        votes: 0,
        id: getId(),
      })
    },
    appendAnecdote(state, action) { // step 3
      state.push(action.payload)
    },
    addVote(state, action){
      const id = action.payload
      const contentToChange = state.find(contentObj => contentObj.id === id)
      const changedContent = {
        ...contentToChange,
        votes: contentToChange.votes+1
      }
      return state.map(contentObj => contentObj.id === id ? changedContent : contentObj)
    }
  }
})

export const { addAnecdote,  addVote, appendAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer