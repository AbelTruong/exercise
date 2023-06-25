import { createSlice } from '@reduxjs/toolkit'
import { data } from '@shopify/app-bridge/actions/Modal'

const initialState = {
  data: {
    show: false,
    error: false,
    message: '',
    onDismiss: null,
  },
}

export default createSlice({
  name: 'notify',
  initialState,
  reducers: {
    showNotify: (state, action) => {
      state.data = { ...initialState.data, ...action.payload, show: true }
    },
    hideNotify: (state) => {
      state.data = initialState.data
    },
  },
})
