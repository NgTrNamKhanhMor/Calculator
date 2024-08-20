//External Libraries
import styled from 'styled-components';

export const StyledButtonItem = styled.button`
    width: 100%;
    padding: 20px;
    color: black;
    font-size: 1.5em;
    border: 2px solid rgb(218,220,224);
    background-color: rgb(218,220,224);
    border-radius:10px;
    transition: border 0.5s ease, box-shadow 0.3s ease;
    &:active {
        border: 3px solid black;  
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

`;

export const DigitButtonItem = styled(StyledButtonItem)`
    border: 2px solid rgb(241,243,244);
    background-color: rgb(241,243,244);
`
export const PrimaryButtonItem = styled(StyledButtonItem)`
    color: #ffff;
    border: 2px solid rgb(66,133,244);
    background-color: rgb(66,133,244);
    &:active {
        border: 2px solid rgb(26,13,171);  
         box-shadow: 0 0 10px rgba(26, 13, 171, 0.5);
    }
`