import { configureStore } from '@reduxjs/toolkit'
import nameRerducer from './name/nameSlice'

 const store = configureStore({
  reducer: {
    name: nameRerducer
  },
})

export default store