import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import useNotification from '../hooks/useNotification'

const AnecdoteList = () => {
  
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const pubslishNotification = useNotification()

  const vote = (id) => {
    dispatch(addVote(id))
    pubslishNotification('you voted for ' + id)
  }

  return (
      anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )
  )
}

export default AnecdoteList