import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

/*
    i) create store
    ii) wrap app component under Provider
    iii) create Slice
    iv) register reducer in Store
*/