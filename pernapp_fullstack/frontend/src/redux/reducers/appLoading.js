import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

export const appLoadingSlice = createSlice({
  name: 'appLoading',
  initialState,
  reducers: {
    showAppLoading: (state, action) => {
      state.loading = true
    },
    hideAppLoading: (state, action) => {
      state.loading = false
    },
  },
})

export const { showAppLoading, hideAppLoading } = appLoadingSlice.actions

export const selectAppLoading = (state) => state.appLoading

export default appLoadingSlice.reducer
