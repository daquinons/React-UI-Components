import React from 'react';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';
import './Calculator.css';

export default (props) => {
  return (
    <div className="calculatorContainer">
      <CalculatorDisplay />
    </div>
  )
}