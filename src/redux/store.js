import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from '~redux/calculatorSlice';

const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
  },
});

export default store;
