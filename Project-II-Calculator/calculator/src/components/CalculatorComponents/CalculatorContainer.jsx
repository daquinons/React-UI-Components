import React, { useState } from 'react';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import './Calculator.css';

export default (props) => {
  const [numberDisplay, setNumberDisplay] = useState("0");

  const numberPressed = (key) => {
    numberDisplay === "0" ? setNumberDisplay(key) : setNumberDisplay(numberDisplay + key)
  }

  const clear = () => {
    setNumberDisplay("0");
  }

  return (
    <div className="calculatorContainer">
      <CalculatorDisplay numberDisplay={numberDisplay} />
      <ActionButton onClick={clear} text="clear" />
      <NumberButton text="÷" red />
      <NumberButton onClick={numberPressed} text="7" />
      <NumberButton onClick={numberPressed} text="8" />
      <NumberButton onClick={numberPressed} text="9" />
      <NumberButton text="x" red />
      <NumberButton onClick={numberPressed} text="4" />
      <NumberButton onClick={numberPressed} text="5" />
      <NumberButton onClick={numberPressed} text="6" />
      <NumberButton text="-" red />
      <NumberButton onClick={numberPressed} text="1" />
      <NumberButton onClick={numberPressed} text="2" />
      <NumberButton onClick={numberPressed} text="3" />
      <NumberButton text="+" red />
      <ActionButton onClick={numberPressed} text="0" />
      <NumberButton text="=" red />
    </div>
  )
}