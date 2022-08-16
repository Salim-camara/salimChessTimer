import React from 'react';
import TimerInterface from './component/timerInterface';
import start from './images/start.png';
import reload from './images/reload.png';
import params from './images/adjust.png'

function App() {
  return (
    <div className="App">
      <div className="central_bar"></div>
      <div className="pause icon">
        <img src={start} className="in-icon" />
      </div>
      <div className="restart icon">
        <img src={reload} className="in-icon" />
      </div>
      <div className="params icon">
        <img src={params} className="in-icon" />
      </div>
      <div className="side_top">
        <TimerInterface />
      </div>
      <div className="side_bottom">
        <TimerInterface />
      </div>
    </div>
  );
}

export default App;
