import { configureStore } from '@reduxjs/toolkit';
import startReducer from './startSlice';
import endReducer from './endSlice';
import reservasReducer from './reservaSlice';
const store = configureStore({
  reducer: {
    start: startReducer,
    end: endReducer,
    reservas: reservasReducer,
  },
});

export default store;
