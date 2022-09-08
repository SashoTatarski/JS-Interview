import React, { Component } from 'react';
class Timer extends Component {
  timerId;
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    }
  }
  setCurrentTime() {
    this.setState({ currentTime: new Date() })
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.setCurrentTime(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="timer-container">
        <h1>Hello, Telerik Academy!</h1>
        <h2>Current time is:  {this.state.currentTime.toLocaleTimeString()}</h2>
      </div>);
  }
}

export default Timer;