//Components

import { DigitButtonItem, PrimaryButtonItem, StyledButtonItem } from "~components/Button/Button.style";






export default function StyledButton({ children }) {
  return (
    <StyledButtonItem>{ children }</StyledButtonItem>
  )
}

export function DigitButton({ children }){
    return (
        <DigitButtonItem>{ children }</DigitButtonItem>
    )
}


export function PrimaryButton({ children }) {  
    return (
        <PrimaryButtonItem>{children}</PrimaryButtonItem>  
    );
}

