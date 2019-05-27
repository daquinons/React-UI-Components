import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderMain(props) {
  return (
    <div className="header-main">
      <HeaderTitle name={props.name} handle={props.handle} timestamp={props.timestamp} />
      <HeaderContent content={props.content} />
    </div>
  )
}

export default HeaderMain;