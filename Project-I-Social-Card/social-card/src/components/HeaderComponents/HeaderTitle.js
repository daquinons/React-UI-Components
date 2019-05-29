import React from 'react';
import './Header.css';

function HeaderTitle(props) {
  return (
    <div className="header-title">
      <div className="name title">
      {props.name}
      </div>
      <div className="handle title">
        {props.handle}
      </div>
     
      <div className="timestamp title">
        {" · " + props.timestamp}
      </div>
    </div>
  )
}

export default HeaderTitle;