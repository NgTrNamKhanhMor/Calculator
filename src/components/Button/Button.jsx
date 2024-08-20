//Components
import {
  DigitButtonItem,
  PrimaryButtonItem,
  StyledButtonItem,
} from "~components/Button/Button.style";
//Redux
import { useDispatch } from "react-redux";
import {
  clearInput,
  equalInput,
  inputDigit,
  operandInput,
  squareInput,
  squareRootInput,
} from "~redux/calculatorSlice";

const handleClick = (label, dispatch) => {
  switch (label) {
    case "C":
      dispatch(clearInput());
      break;
    case "√":
      dispatch(squareRootInput(label));
      break;
    case "x²":
      dispatch(squareInput());
      break;
    case "+":
      case "-":
      case "x":
      case "/":
        dispatch(operandInput(label));
        break;
    case "=":
      dispatch(equalInput());
      break;
    default:
      dispatch(inputDigit(label));
      break;
  }
};

export function StyledButton({ children }) {
  const dispatch = useDispatch();

  return (
    <StyledButtonItem onClick={() => handleClick(children, dispatch)}>
      {children}
    </StyledButtonItem>
  );
}
export function DigitButton({ children }) {
  const dispatch = useDispatch();

  return (
    <DigitButtonItem onClick={() => handleClick(children, dispatch)}>
      {children}
    </DigitButtonItem>
  );
}

export function PrimaryButton({ children }) {
  const dispatch = useDispatch();

  return (
    <PrimaryButtonItem onClick={() => handleClick(children, dispatch)}>
      {children}
    </PrimaryButtonItem>
  );
}
