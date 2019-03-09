import {combineReducers, createStore} from "redux";

const playerReducer = (state, action) => {
  return state;
};

// short hand property - json객체의 key와 value의 이름이 같으면 하나로 축약한다.
// ex) {a:a} -> {a}
const allReducer = combineReducers({playerReducer})

export const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());