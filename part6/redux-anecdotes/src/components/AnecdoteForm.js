import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={(evt) => props.createAnecdote(evt)}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        createAnecdote: event => {
            event.preventDefault()
            const anecdoteContent = event.target.anecdote.value
            dispatch(createNewAnecdote(anecdoteContent))
            dispatch(setNotification('new anecdote created!', 3))
        }
    }
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)