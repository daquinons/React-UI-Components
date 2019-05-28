import React from 'react';
import Button from './Button';
import './Button.css';

let buttonStyle = {
  width: '75%',
  height: '100px',
  border: '1px solid grey',
  backgroundColor: 'white',
  fontSize: '3.5rem',
  fontWeight: 200
};

export default (props) => {
  if (props.text === '0') {
    return <Button buttonStyle={buttonStyle} text={props.text} bold />;
  }

  return <Button buttonStyle={buttonStyle} text={props.text} />;
  
}