import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

function CardContainer(props) {
  return (
    <a href="https://reactjs.org/" target="_blank">
      <div class="card-container">
        <CardBanner bannerImage={props.bannerImage} />
        <CardContent />
      </div>
    </a>
  )
}

export default CardContainer;