import {ADD_PLAYER, CHANGE_SCORE, UPDATE_TITLE} from "./actionType";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title // <- short hand property
});

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
});

export const changeScore = (index, score) => ({
  type: CHANGE_SCORE,
  index,
  score
});