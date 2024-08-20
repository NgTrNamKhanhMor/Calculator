import { createSlice } from '@reduxjs/toolkit';
import {
  shouldStartWithBracket,
  shouldReplaceLastOperand,
  shouldAddClosingBracket,
  shouldAddOpeningBracket,
  prependMultiplicationIfNeeded,
  handleSquare,
  closeRemainingBrackets,
  isLastCharOperand
} from '~/ultis/helper';


const initialState = {
  currentInput: '0',
  calValue: '',
  brackets: [],
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    inputDigit(state, action) {
      if (state.calValue === '') {
        state.calValue = action.payload;
      } else {
        state.calValue += action.payload;
      }
      if (state.currentInput === '0') {
        state.currentInput = action.payload;
      } else {
        state.currentInput += action.payload;
      }
    },
    operandInput(state, action) {
      const lastChar = state.calValue.slice(-1);

      if (shouldReplaceLastOperand(lastChar)) {
        state.calValue = state.calValue.slice(0, -1) + (action.payload === 'x' ? '*' : action.payload);
        state.currentInput = state.currentInput.slice(0, -1) + action.payload;
      } else {
        state.calValue += action.payload === 'x' ? '*' : action.payload;
        state.currentInput += action.payload;
      }
    },
    squareRootInput(state) {
      const updatedCalValue = prependMultiplicationIfNeeded(state.calValue);
      state.calValue = updatedCalValue + 'Math.sqrt(';
      state.currentInput = updatedCalValue + '√(';
      state.brackets.push('(');
    },
    squareInput(state) {
      state.calValue = handleSquare(state.calValue);
      state.currentInput += '²';
    },

    clearInput(state) {
      state.currentInput = '0';
      state.calValue = '';
      state.brackets = [];
    },
    bracketInput(state) {
      const lastChar = state.calValue.slice(-1);

      if (shouldStartWithBracket(lastChar, state.calValue)) {
        state.calValue += '(';
        state.currentInput += '(';
        state.brackets.push('(');
      } else if (shouldAddClosingBracket(lastChar, state.brackets)) {
        state.calValue += ')';
        state.currentInput += ')';
        state.brackets.pop();
      } else if (shouldAddOpeningBracket(lastChar, state.brackets)) {
        state.calValue += (isLastCharOperand? '*' : "") +'(';
        state.currentInput += (isLastCharOperand? 'x' : "") +'(';
        state.brackets.push('(');
      } else {
        state.calValue += ')';
        state.currentInput += ')';
        state.brackets.pop();
      }
    },
    equalInput(state) {
      try {
        state.calValue = closeRemainingBrackets(state.calValue, state.brackets);
        const result = eval(state.calValue);
        state.currentInput = result.toString();
        state.calValue = result.toString();
      } catch (error) {
        state.currentInput = 'Error';
        state.calValue = '';
      }
    },
  },
});

export const {
  inputDigit,
  operandInput,
  squareRootInput,
  squareInput,
  equalInput,
  clearInput,
  bracketInput
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
