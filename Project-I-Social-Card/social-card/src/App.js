import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';

const App = (props) => {
  return (
    <div className="app">
      <HeaderContainer imageUrl={props.data.imageUrl} name={props.data.name} handle={props.data.handle} timestamp={props.data.timestamp} content={props.data.content} />
      <CardContainer bannerImage={props.data.bannerImage} />
    </div>
  );
};

export default App;
