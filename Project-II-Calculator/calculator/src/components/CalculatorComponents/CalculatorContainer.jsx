import React, { useState } from 'react';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import './Calculator.css';

export default (props) => {
  const [numberDisplay, setNumberDisplay] = useState(0);
  return (
    <div className="calculatorContainer">
      <CalculatorDisplay numberDisplay={numberDisplay} />
      <ActionButton text="clear" />
      <NumberButton text="÷" red />
      <NumberButton text="7" />
      <NumberButton text="8" />
      <NumberButton text="9" />
      <NumberButton text="x" red />
      <NumberButton text="4" />
      <NumberButton text="5" />
      <NumberButton text="6" />
      <NumberButton text="-" red />
      <NumberButton text="1" />
      <NumberButton text="2" />
      <NumberButton text="3" />
      <NumberButton text="+" red />
      <ActionButton text="0" />
      <NumberButton text="=" red />
    </div>
  )
}