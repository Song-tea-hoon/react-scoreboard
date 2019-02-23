import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action" onClick={()=>this.props.changeScore(this.props.index, -1)}>-</button>
        <span className="counter-score">{this.props.score}</span>
        {/* 이벤트의 등록은 명령형이 아니라 선언형 스타일로 등록해야한다. */}
        <button className="counter-action" onClick={()=>this.props.changeScore(this.props.index, 1)}>+</button>
      </div>
    )
  }
}