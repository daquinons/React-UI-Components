import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = { imageUrl: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png', 
               name: 'Lambda School', 
               handle: '@LambdaSchool', 
               timestamp: '26 jan', 
               content: "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!",
               bannerImage: 'https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png',
                
              };

ReactDOM.render(<App data={data} />, document.getElementById('root'));
