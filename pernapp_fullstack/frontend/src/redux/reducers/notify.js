import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
  error: false,
  message: '',
  onDismiss: undefined,
}

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    showNotify: (state, action) => {
      //tự động tạo ra cho ta một actions creator khi nó chạy
      state.show = true
      state.error = action.payload.error || false
      state.message = action.payload.message || ''
      state.onDismiss = action.payload.onDismiss || undefined
    }, // => actions: type: notify/showNotify
    hideNotify: (state) => {
      state.show = false
      state.error = false
      state.message = ''
      state.onDismiss = undefined
    }, // => action type: notify/hideNootify
  },
})

export const { showNotify, hideNotify } = notifySlice.actions
/**
 * actions
 * {
 *  type: notify/showNotify
 *  payload: value
 * }
 */

export const selectNotify = (state) => state

export default notifySlice.reducer
