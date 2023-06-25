import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {
    isFullScreen: false,
    openConfirmClose: false,
  },
}

export default createSlice({
  name: 'fullScreen',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})
