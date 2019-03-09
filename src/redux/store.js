import {combineReducers, createStore} from "redux";
import {UPDATE_TITLE} from "./actionType";

const playerInitialState = {
  title: 'Store Scoreboard'
};

const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE :
      return { // 새로운 객체를 리턴해야한다.
        ...state,
        title: action.title
      }
    default :
      return state;
  }
};

// short hand property - json객체의 key와 value의 이름이 같으면 하나로 축약한다.
// ex) {a:a} -> {a}
const allReducer = combineReducers({playerReducer});

export const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store);