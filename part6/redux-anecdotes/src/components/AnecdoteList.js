
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import useNotification from '../hooks/useNotification'

const AnecdoteList = () => {
  
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const pubslishNotification = useNotification()

  const vote = (anecdote) => {
    dispatch(addVote(anecdote))
    pubslishNotification('you voted for ' + anecdote.id)
  }

  return (
      anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )
  )
}

export default AnecdoteList