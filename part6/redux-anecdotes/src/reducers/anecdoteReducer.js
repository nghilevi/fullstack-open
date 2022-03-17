import { createSlice } from '@reduxjs/toolkit'

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
    appendAnecdote(state, action) { // u hav to loop thru a lists of items and dispatch for each item
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
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

export const { addAnecdote,  addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer