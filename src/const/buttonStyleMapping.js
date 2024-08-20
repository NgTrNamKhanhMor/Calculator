//Components
import StyledButton, { DigitButton, PrimaryButton } from "../components/Button/Button";

export const buttonMapping = {
    '=': PrimaryButton,
    'C': StyledButton,
    '√': StyledButton,
    'x²': StyledButton,
    '+': StyledButton,
    '-': StyledButton,
    'x': StyledButton,
    '/': StyledButton,
    '()': StyledButton,
    '.': StyledButton,
    '0': DigitButton,
    '1': DigitButton,
    '2': DigitButton,
    '3': DigitButton,
    '4': DigitButton,
    '5': DigitButton,
    '6': DigitButton,
    '7': DigitButton,
    '8': DigitButton,
    '9': DigitButton,
  };
  
  export const buttonLayout = [
    ['C', '√', 'x²', '+'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', 'x'],
    ['1', '2', '3', '/'],
    ['()', '0', '.', '=']
  ];
  