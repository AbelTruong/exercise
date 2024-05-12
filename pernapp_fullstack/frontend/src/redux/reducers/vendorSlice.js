import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  vendors: null,
}

export const vendorSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    setVendors: (state, action) => {
      state.vendors = action.payload
    },
  },
})

export const { setVendors } = vendorSlice.actions

export const selectVendors = (state) => state.vendorSlice.vendors

export default vendorSlice.reducer
