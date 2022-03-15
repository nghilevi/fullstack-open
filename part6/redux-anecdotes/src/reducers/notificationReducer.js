import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: null,
    reducers: {
      setNotification(state, action){ // shorthand for a function assigned to the method's name.
        return action.payload
      },
      clearNotification(state, action){
        return ''
      }
    }
})
  
export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer