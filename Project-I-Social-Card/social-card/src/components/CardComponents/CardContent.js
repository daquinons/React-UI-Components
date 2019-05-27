import React from 'react';
import './Card.css';

function CardContent(props) {
  return(
    <div class="card-content">
      <h4>Get started with React</h4>
      <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <p style={{color: "grey"}}>reactjs.org</p>
    </div>
  );
}

export default CardContent;