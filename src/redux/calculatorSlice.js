//External Libraries
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentInput: '0',
  operator: null,
  previousInput: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit(state, action) {
      if (state.currentInput === '0') {
        state.currentInput = action.payload;
      } else {
        state.currentInput += action.payload;
      }
      
    },
    operandInput(state, action) {
      if (state.currentInput === '0' && action.payload ==='-') {
        state.currentInput = action.payload;
      }  else if (action.payload ==='x'){
        state.currentInput += "*"
      }else{
        state.currentInput += action.payload;
      }
    },
    squareRootInput(state, action) {
      if (state.currentInput === '0') {
        state.currentInput = action.payload + "(";
      } else {
        state.currentInput += action.payload + "(";
      }
    },
    squareInput(state) {
      if (state.currentInput === '0') {
        state.currentInput = '0';
      } else {
        state.currentInput += '^2';
      }
    },
    equalInput(state) {
      try {
        const result = eval(state.currentInput);
        state.currentInput = result.toString();
      } catch (error) {
        return;
      }
    },
    clearInput(state) {
      state.currentInput = '0';
    },
  },
});

export const { inputDigit, clearInput, squareRootInput, squareInput, equalInput,operandInput } = calculatorSlice.actions;
export default calculatorSlice.reducer;
