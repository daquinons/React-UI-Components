import React from 'react';
import './Card.css';

function CardBanner(props) {
  return <div className="banner-image" style={{backgroundImage: `url(${props.bannerImage})`}} />
}

export default CardBanner;