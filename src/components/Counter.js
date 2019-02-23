import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    score: 0
  }

  incrementScore = () => {
    console.log('increment', this); // lexical this: 자기자긴을 가르킨다.
    // this.state.score = 1; // 랜더링이 일어나지 않는다.
    // this.setState({score: 1});
    this.setState(prevState => ({score: prevState.score + 1}));
  }

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action" onClick={this.decrementScore}>-</button>
        <span className="counter-score">{this.state.score}</span>
        {/* 이벤트의 등록은 명령형이 아니라 선언형 스타일로 등록해야한다. */}
        <button className="counter-action" onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}