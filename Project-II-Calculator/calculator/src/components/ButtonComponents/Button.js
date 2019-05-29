import React from 'react';
import './Button.css';

export default (props) => {
  if (props.red) {
    return <button className={'red'} style={props.buttonStyle}>{props.text}</button>
  }
  return <button onClick={props.onClick? () => props.onClick(props.text) : undefined} className={props.bold ? 'bold' : undefined} style={props.buttonStyle}>{props.text}</button>
}