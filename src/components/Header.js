import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';

// Destructuring assignment (해체 할당 문법 / 비구조화 할당? )
export const Header = ({players, title}) => {
  return (
    <header>
      <Statistics players={players}/>
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  palyers: PropTypes.array,
  title: PropTypes.string
}