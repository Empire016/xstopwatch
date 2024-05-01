import './App.css';
import React, { useState } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formattedTime = `${Math.floor(time / 60)}:${(`0${time % 60}`).slice(-2)}`;

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-display">
        <div className="stopwatch-text">Stopwatch</div>
        <div className="time">{formattedTime}</div>
      </div>
      <div className="buttons">
        {isRunning ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;