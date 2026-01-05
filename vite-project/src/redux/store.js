import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feature/counterSlice'

export const store = configureStore({
   reducer: {
    // your reducers here
     counter:counterReducer
  },
});