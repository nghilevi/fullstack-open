
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import { useRef } from 'react';

const useNotification = () => {
    
    const dispatch = useDispatch()
    const timeoutRef = useRef();

    const pubslishNotification = (message) => {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
        dispatch(setNotification(message))   
    }

    return pubslishNotification
}

export default useNotification