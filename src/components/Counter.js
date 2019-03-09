import React from 'react';
import PropTypes from 'prop-types';
import {changeScore} from "../redux/actions";
import{connect} from "react-redux";
import classNames from 'classnames';
import styles from '../pages/scoreboard/Scoreboard.module.css'

class Counter extends React.Component {
  // static 키워드를 이용하여 class내부에 prop-types 선언가능하다.
  static propTypes = {
    score: PropTypes.number,
    index: PropTypes.number,
    changeScore: PropTypes.func
  };

  render() {
    const {changeScore, score, index} = this.props;

    return (
      <div className={classNames(styles.counter)}>
        <button className={classNames( styles["counter-action"], styles.decrement )}
                onClick={()=>changeScore(index, -1)}
        >-</button>
        <span className={classNames(styles["counter-score"])}>{score}</span>
        {/* 이벤트의 등록은 명령형이 아니라 선언형 스타일로 등록해야한다. */}
        <button className={classNames( styles["counter-action"], styles.increment )}
                onClick={()=>changeScore(index, 1)}
        >+</button>
      </div>
    )
  }
}

const mapActionToProps = (dispatch) => ({
  changeScore: (index, score) => dispatch(changeScore(index, score))
});

export default connect(null, mapActionToProps)(Counter) // <- HOC( High order Component )로 변환