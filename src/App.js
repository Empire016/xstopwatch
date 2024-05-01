import './App.css';
import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      running: false
    };
  }

  start = () => {
    this.setState({ running: true });
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 0.01 });
    }, 10);
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.interval);
  };

  reset = () => {
    this.setState({ time: 0 });
    clearInterval(this.interval);
  };

  render() {
    const { time, running } = this.state;
    return (
      <div className="stopwatch-container">
        <div className="row">
          <h1 className="stopwatch-title">Stopwatch</h1>
          <h2 className="stopwatch-time">{time.toFixed(2)}</h2>
          <button onClick={this.start} disabled={running} className="stopwatch-button">
            Start
          </button>
          <button onClick={this.stop} disabled={!running} className="stopwatch-button">
            Stop
          </button>
          <button onClick={this.reset} className="stopwatch-button">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;