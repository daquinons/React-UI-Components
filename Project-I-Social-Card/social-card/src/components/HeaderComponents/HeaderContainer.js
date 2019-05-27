import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderMain from './HeaderMain';
import './Header.css';

function HeaderContainer(props) {
  return (
    <div className="header-container">
      <ImageThumbnail imageUrl={props.imageUrl} />
      <HeaderMain name={props.name} handle={props.handle} timestamp={props.timestamp} content={props.content} />
    </div>
  )
}

export default HeaderContainer;