import React from 'react';
import './Display.css';

export default (props) => {
  return(
    <div className="screen">
      <span className="display-text">{props.numberDisplay}</span>
    </div>
  )
}