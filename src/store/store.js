import { configureStore } from '@reduxjs/toolkit';
import startReducer from './startSlice';
import endReducer from './endSlice';
const store = configureStore({
  reducer: {
    start: startReducer,
    end: endReducer,
  },
});

export default store;
