import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: null,
  params: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setParams: (state, action) => {
      state.params = action.payload
    },
  },
})

export const { setProducts, setParams } = productSlice.actions

export const selectProducts = (state) => state.productSlice.products
export const selectParams = (state) => state.productSlice.params

export default productSlice.reducer
