import React from 'react';
import Button from './Button';
import './Button.css';

const buttonStyle = {
  width: '25%',
  height: '100px',
  border: '1px solid grey',
  backgroundColor: 'white',
  fontSize: '3.5rem',
  fontWeight: 'bold'
};

export default (props) => {
  return props.red ? <Button buttonStyle={buttonStyle} text={props.text} red /> : <Button onClick={props.onClick} buttonStyle={buttonStyle} text={props.text} />
}