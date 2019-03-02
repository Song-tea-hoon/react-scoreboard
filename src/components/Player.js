import React from 'react';
import {Counter} from "./Counter";

export class Player extends React.PureComponent { // PureComponent props의 값이 변할 때에만 render를 하는 Component
  render() {
    console.log(this.props.name, ' rendered');
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>x</button>
      </span>
        <span className="player-name">
        {this.props.name}
      </span>
        <Counter score={this.props.score} index={this.props.index} changeScore={this.props.changeScore} />
      </div>
    );
  }
  // // React.Component에서 render가 실행되기 직전에 호출되는 메서드
  // // (true를 리턴하면 랜더링되고 false이면 랜더링 되지 않는다.)
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return true;
  // }
}