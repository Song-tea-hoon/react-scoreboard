import {ADD_PLAYER, UPDATE_TITLE} from "./actionType";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title // <- short hand property
})

export const addPlayer = (name) => ({
  type: ADD_PLAYER,
  name
})