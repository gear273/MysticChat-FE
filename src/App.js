import React, { useState } from 'react';
import './App.css';
import QuestionBox from './components/QuestionBox';
import Decoration from './components/Decoration';
import './components/StarBackground.css';
import Title from './components/Title';

function App() {
  const [isThinking, setIsThinking] = useState(false);

  // Código para las estrellas
  let stars = [];
  for (let i = 0; i < 200; i++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      stars.push(<div className="star" style={{top: y, left: x}} />);
  }

  return (
    <div className="App">
      <div className="star-container">
          {stars}
      </div>
      <div style={{minHeight: 'calc(100vh - 50px)', position: 'relative'}}>
        <Title />
        <QuestionBox 
          isThinking={isThinking}
          setIsThinking={setIsThinking}
        />
        
        <Decoration imgSrc="skull.png" position="top-left" width="600px" height="600px"/>
        <Decoration imgSrc="candle.png" position="bottom-left" width="500px" height="500px"/>
        <Decoration imgSrc="card2.png" position="top-right" width="500px" height="500px"/>
        <Decoration imgSrc="card.png" position="bottom-right" width="500px" height="500px"/>
      </div>
      <footer style={{ backgroundColor: '#F5A7BD', padding: '4px 0', color: 'black', textAlign: 'center', fontFamily: 'Arial', fontSize: '14px' }}>
       <p>networkbittech@gmail.com - NWB All Rights Reserved©</p>
      </footer>
    </div>
  );
}

export default App;










