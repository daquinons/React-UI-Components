import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer(props) {
  return (
    <div class="card-container">
      <CardBanner bannerImage={props.bannerImage} />
      <CardContent />
    </div>
  )
}

export default CardContainer;