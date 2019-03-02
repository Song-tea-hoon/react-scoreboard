import React from 'react';

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