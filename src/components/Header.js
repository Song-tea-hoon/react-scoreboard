import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

// Destructuring assignment (해체 할당 문법 / 비구조화 할당? )
const Header = ({players, title}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object), //배열 안의 요소가 Object인지 확인
  title: PropTypes.string
}

// props의 기본 값을 지정한다.
Header.defaultProps = {
  title: 'Scoreboard'
}

let mapStateToPorps = (state) => ({
  title: state.playerReducer.title
})

export default connect(mapStateToPorps)(Header);