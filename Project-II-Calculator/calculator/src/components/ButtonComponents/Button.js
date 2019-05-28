import React from 'react';
import './Button.css';

export default (props) => {
  console.log(props.red);
  if (props.red) {
    return <button className={'red'} style={props.buttonStyle}>{props.text}</button>
  }
  return <button className={props.bold ? 'bold' : undefined} style={props.buttonStyle}>{props.text}</button>
}