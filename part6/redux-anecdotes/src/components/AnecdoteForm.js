import { addAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import useNotification from '../hooks/useNotification'

const AnecdoteForm = () => {
    
    const dispatch = useDispatch()
    const pubslishNotification = useNotification()

    const createAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        dispatch(addAnecdote(anecdote))
        pubslishNotification('new anecdote created!')
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={createAnecdote}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm