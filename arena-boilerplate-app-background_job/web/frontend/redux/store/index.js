import { configureStore } from '@reduxjs/toolkit'

import reducer from '../reducer'

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})
