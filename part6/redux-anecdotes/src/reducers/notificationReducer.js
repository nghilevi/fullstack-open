import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {
      id: null, message: ''
    },
    reducers: {
      _setNotification(state, action){ // shorthand for a function assigned to the method's name.
        if(state.id){
          clearTimeout(state.id)
        }
        return {
          id: action.payload.notificationTimeoutId,
          message: action.payload.message
        }
      },
      clearNotification(state, action){
        return {
          id: null,
          message: ''
        }
      }
    }
})

export const setNotification = (message, time) => {
  return async dispatch => {
    const notification = {
      message,
      notificationTimeoutId: setTimeout(() => {
        dispatch(clearNotification())
      }, time * 1000),
    }
    dispatch(_setNotification(notification))
  }
}

export const { _setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer