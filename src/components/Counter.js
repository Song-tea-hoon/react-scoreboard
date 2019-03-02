import React from 'react';
import PropTypes from 'prop-types';

export class Counter extends React.Component {
  // static 키워드를 이용하여 class내부에 prop-types 선언가능하다.
  static propTypes = {
    score: PropTypes.number,
    index: PropTypes.number,
    changeScore: PropTypes.func
  }

  render() {
    const {changeScore, score, index} = this.props;
    return (
      <div className="counter">
        <button className="counter-action" onClick={()=>changeScore(index, -1)}>-</button>
        <span className="counter-score">{score}</span>
        {/* 이벤트의 등록은 명령형이 아니라 선언형 스타일로 등록해야한다. */}
        <button className="counter-action" onClick={()=>changeScore(index, 1)}>+</button>
      </div>
    )
  }
}

// Counter.propTypes = {
//   score: PropTypes.number,
//   index: PropTypes.number,
//   changeScore: PropTypes.func
// }
