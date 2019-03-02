import React from 'react';

export class Stopwatch extends React.Component {

  tickRef; // class의  public속성

  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      timer: 0
    }
  }

  // life cycle
  // Dom이 생성된 직후
  // 서드파트 라이브러리 실행 or 네트워크 호출 할때 필요
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    }
  };

  // Dom이 파괴되기 직전
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  };

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={() => this.setState({timer: 0})}>Reset</button>
      </div>
    );
  }
}