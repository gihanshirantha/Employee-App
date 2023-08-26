import { configureStore } from '@reduxjs/toolkit';
import { ReducerSlice } from './reducer';

// ...

export const store = configureStore({
  reducer: {
    empapp: ReducerSlice.reducer
  }
});
