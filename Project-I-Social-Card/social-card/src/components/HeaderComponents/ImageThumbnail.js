import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
  return <img className="thumbnail" src={props.imageUrl} />;
}

export default ImageThumbnail;