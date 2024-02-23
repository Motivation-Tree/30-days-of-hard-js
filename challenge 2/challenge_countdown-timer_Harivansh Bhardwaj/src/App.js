import React, { useState, useEffect } from 'react';
import './App.css';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(localStorage.getItem('countdown') || 300);
  const [isPaused, setIsPaused] = useState(false);
  const [customDuration, setCustomDuration] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds - 1;
          localStorage.setItem('countdown', newSeconds);
          return newSeconds;
        });
      }
    }, 1000);


    return () => clearInterval(timer);
  }, [isPaused]);

  
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('countdown', seconds);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);


    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [seconds]);

  const handleDurationChange = (duration) => {
    setSeconds(duration);
    setIsPaused(false);
  };

  const handleResetPause = () => {
    setIsPaused(!isPaused);
  };

  const handleStopStart = () => {
    setIsPaused(!isPaused);
    setSeconds(300); 
  };

  const handleCustomDurationChange = (event) => {
    setCustomDuration(event.target.value);
  };

  const handleSetCustomDuration = () => {
    const durationInSeconds = parseInt(customDuration) * 60;
    if (!isNaN(durationInSeconds)) {
      setSeconds(durationInSeconds);
      setIsPaused(false);
    }
  };

  useEffect(() => {
    if (seconds === 0) {
      setIsPaused(true);
    }
  }, [seconds]);

  return (
    <div className='app'>
      <h1 className='h1'>Countdown Timer</h1>
      <p className='counter'>{`${Math.floor(seconds / 60)}:${(seconds % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}`}</p>
      <button className='duration-button' onClick={() => handleDurationChange(300)}>5 minutes</button>
      <button className='duration-button' onClick={() => handleDurationChange(600)}>10 minutes</button>
      <button className='duration-button' onClick={() => handleDurationChange(900)}>15 minutes</button>
      <div>
        <br />
        <input type="number" value={customDuration} onChange={handleCustomDurationChange} placeholder="Duration in minutes" />
        <button className='duration-button' onClick={handleSetCustomDuration}>Set</button>
      </div>
      <br />
      <button className='pause-button' onClick={handleResetPause}>{isPaused ? 'Resume' : 'Pause'}</button>
      <button className='stop-button' onClick={handleStopStart}>{isPaused ? 'Start' : 'Stop'}</button>
      <br />
      <h5>Made with ❣️ by <a href="https://www.github.com/harivanshx/">Harivanshx</a></h5>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <CountdownTimer />
    </div>
  );
}

export default App;

