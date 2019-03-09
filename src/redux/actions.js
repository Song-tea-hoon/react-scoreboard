import {UPDATE_TITLE} from "./actionType";

export const updateTitle = (title) => ({
  type: UPDATE_TITLE,
  title // <- short hand property
})