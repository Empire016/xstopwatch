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
      <div c>
        <div className="row">
          <h1>Stopwatch</h1>
          <h2>Time: {time.toFixed(2)}</h2>
          <button onClick={this.start} disabled={running}>
            Start
          </button>
          <button onClick={this.stop} disabled={!running}>
            Stop
          </button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;