import React from 'react';
import {connect} from "react-redux";
import {updateTitle} from "../redux/actions";
import PropTypes from 'prop-types';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";

// Destructuring assignment (해체 할당 문법 / 비구조화 할당? )
const Header = ({players, title, changeTitle}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1 onClick={() => changeTitle('test coreboader')}>{title}</h1>
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

// action을 dispatch하는 function을 props로 맵핑한다.
// let mapActionToProps = (dispatch) => {
//   return {
//     changeTitle: (title) => dispatch(updateTitle(title))
//   }
// }

export default connect(mapStateToPorps, {changeTitle: updateTitle})(Header);