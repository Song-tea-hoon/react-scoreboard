import {combineReducers, createStore} from "redux";
import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER, UPDATE_TITLE} from "./actionType";

const playerInitialState = {
  title: 'Store Scoreboard',
  players: [
    {name: 'LDK', score: 0, id: 0},
    {name: 'HONG', score: 0, id: 1},
    {name: 'KIM', score: 0, id: 2},
    {name: 'PARK', score: 0, id: 3},
  ]
};

let playerId = 4;

const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE :
      return { // 새로운 객체를 리턴해야한다.
        ...state,
        title: action.title
      };
    case ADD_PLAYER :
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            id: ++playerId
          }
        ]
      };
    case CHANGE_SCORE :
      // 스코어 변경 적용
      state.players.forEach(item => {
        if(item.id === action.index){
          item.score += action.score
        }
      });
      return {
        ...state,
        players: [
          ...state.players // 변경된 players deep copy
        ]
      };
    case REMOVE_PLAYER :
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.id)
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