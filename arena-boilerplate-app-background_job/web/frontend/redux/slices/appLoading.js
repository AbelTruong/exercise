import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {
    loading: false,
    action: '',
  },
}

export default createSlice({
  name: 'appLoading',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = { ...initialState.data, ...action.payload, loading: true }
    },
    showAppLoading: (state, action) => {
      state.data = { ...initialState.data, loading: true }
    },
    hideAppLoading: (state, action) => {
      state.data = initialState.data
    },
  },
})
