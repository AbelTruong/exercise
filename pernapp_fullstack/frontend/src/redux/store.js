import { configureStore } from '@reduxjs/toolkit'
import notify from './reducers/notify.js'
import appLoading from './reducers/appLoading.js'
import vendorSlice from './reducers/vendorSlice.js'
import productSlice from './reducers/productSlice.js'

export const store = configureStore({
  reducer: {
    notify,
    appLoading,
    vendorSlice,
    productSlice,
  },
})
