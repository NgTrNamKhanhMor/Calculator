export const shouldStartWithBracket = (lastChar, calValue) => {
    return ['+', '-', '*', '/', ''].includes(lastChar) || calValue === '';
  };
  
  export const shouldReplaceLastOperand = (lastChar) => {
    return ['+', '-', '*', '/'].includes(lastChar);
  };
  
    const hasOpenBrackets = (brackets) => {
    return brackets.length > 0;
  };
  export const prependMultiplicationIfNeeded = (calValue) => {
    const lastNumberMatch = calValue.match(/(\d+\.?\d*)$/);
    if (lastNumberMatch) {
      return  calValue+'*' ;
    }
    return calValue;
  };
  export const shouldAddClosingBracket = (lastChar, brackets) => {
    return lastChar !== '(' && hasOpenBrackets(brackets);
  };
  
  export const shouldAddOpeningBracket = (lastChar, brackets) => {
    return lastChar === '(' || brackets.length === 0;
  };
  
  export const isLastCharOperand = (lastChar) => {
    return ['+', '-', '*', '/'].includes(lastChar);
  };
  
  export const handleSquare = (calValue) => {
    
    const lastNumberMatch = calValue.match(/(\d+\.?\d*)$/);
    if (lastNumberMatch) {
      const lastNumber = lastNumberMatch[0];
      return calValue.replace(/(\d+\.?\d*)$/, `${Math.pow(Number(lastNumber), 2)}`);
    }
    return calValue + '**2';
  };
  
  export const closeRemainingBrackets = (calValue, brackets) => {
    while (brackets.length) {
      calValue += ')';
      brackets.pop();
    }
    return calValue;
  };
  