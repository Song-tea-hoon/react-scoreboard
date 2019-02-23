import React from 'react';
import {Counter} from "./Counter";

export const Player = (props) => {
  return (
    <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>
      <span className="player-name">{props.name}</span>
      {/*
        <Counter score={props.score}
               index={props.index}
               changeScore={(delta) => props.changeScore}/>
        // object이름과 값을 그대로 spread해서 넘긴다..
      */}
      <Counter {...props}/>
    </div>
  );
};