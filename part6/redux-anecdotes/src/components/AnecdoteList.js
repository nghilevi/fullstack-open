import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {
  
  return (
      props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => props.vote(anecdote)}>vote</button>
          </div>
        </div>
      )
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    vote: anecdote => {
      dispatch(addVote(anecdote))
      dispatch(setNotification(`you voted '${anecdote.content}'`, 3))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
