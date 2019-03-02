import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = (props) => {

  const players = props.players.length;
  // const totalScore = props.players.reduce((accumulator, currentValue) => accumulator + currentValue.score, props.players[0].score); // 보기 어렵다... 쉬운 방법으로
  let totalScore = 0;
  props.players.forEach(item => totalScore += item.score)

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{players}</td>
      </tr>
      <tr>
        <td>Total Score:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
};
//배열 > PropTypes.shape을 사용하여 오브젝트 형태로 디테일한 타입을 정할 수 있다.
Statistics.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}