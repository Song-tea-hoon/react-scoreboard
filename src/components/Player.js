import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

// PureComponent : props의 값이 변할 때에만 render를 하는 Component 성능 최적화에 쓰인다...
class Player extends React.PureComponent {
  render() {
    // Destructuring assignment (해체 할당 문법 / 비구조화 할당? )
    const { removePlayer, name, id, score } = this.props;
    console.log(name, ' rendered');
    return (
      <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
      </span>
        <span className="player-name">
        {name}
      </span>
        <Counter index={id} name={name} score={score} />
      </div>
    );
  }
  // // React.Component에서 render가 실행되기 직전에 호출되는 메서드
  // // (true를 리턴하면 랜더링되고 false이면 랜더링 되지 않는다.)
  // // return되지 않으면 에러발생..
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return true;
  // }
}

const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
});

export default connect(null, mapActionToProps)(Player);