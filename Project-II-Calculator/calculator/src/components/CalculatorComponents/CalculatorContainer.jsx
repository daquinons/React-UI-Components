import React, { useState } from 'react';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import './Calculator.css';

export default (props) => {
  const [numberDisplay, setNumberDisplay] = useState("0");

  const keyPressed = (key) => {
    numberDisplay === "0" ? setNumberDisplay(key) : setNumberDisplay(numberDisplay + key)
  }

  return (
    <div className="calculatorContainer">
      <CalculatorDisplay numberDisplay={numberDisplay} />
      <ActionButton text="clear" />
      <NumberButton text="÷" red />
      <NumberButton onClick={keyPressed} text="7" />
      <NumberButton onClick={keyPressed} text="8" />
      <NumberButton onClick={keyPressed} text="9" />
      <NumberButton text="x" red />
      <NumberButton onClick={keyPressed} text="4" />
      <NumberButton onClick={keyPressed} text="5" />
      <NumberButton onClick={keyPressed} text="6" />
      <NumberButton text="-" red />
      <NumberButton onClick={keyPressed} text="1" />
      <NumberButton onClick={keyPressed} text="2" />
      <NumberButton onClick={keyPressed} text="3" />
      <NumberButton text="+" red />
      <ActionButton onClick={keyPressed} text="0" />
      <NumberButton text="=" red />
    </div>
  )
}