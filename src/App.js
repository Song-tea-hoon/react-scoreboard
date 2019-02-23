import React from 'react';
import './App.css';

// webstrom 범위 선택  : control - w
// const head = (
//   <header>
//     <h1 id={myTitleId} title={myTitle}>111 {title}</h1>
//     <p>{desc}</p>
//   </header>
// )

// function component
// 함수 컴포넌트를 **호출(생성이 아니다.)**하면 JSX형식에 맞춰진 ReactElement객체를 리턴
// props는 부모로 부터 온 object형식의 상태 readOnly(변경이 되면 자기 자신만 바뀐다.)
const Header = (props) => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

class Counter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     score: 0
  //   };
  //   this.incrementScore = this.incrementScore.bind(this);
  // }
  //
  // incrementScore = function() {
  //   console.log('increment', this)
  // }
  state = {
    score: 0
  }

  incrementScore = () => {
    console.log('increment', this); // lexical this: 자기자긴을 가르킨다.
    // this.state.score = 1; // 랜더링이 일어나지 않는다.
    // this.setState({score: 1});
    this.setState(prevState => ({score: prevState.score + 1}));
  }

  decrementScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action" onClick={this.decrementScore}>-</button>
        <span className="counter-score">{this.state.score}</span>
        {/* 이벤트의 등록은 명령형이 아니라 선언형 스타일로 등록해야한다. */}
        <button className="counter-action" onClick={this.incrementScore}>+</button>
      </div>
    )
  }
}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
    </span>
    <span className="player-name">{props.name}</span>
    <Counter score={props.score}/>
  </div>
);

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 0},
      {name: 'HONG', score: 40, id: 1},
      {name: 'KIM', score: 50, id: 2},
      {name: 'PARK', score: 60, id: 3},
    ]
  }

  handleRemove = (id) => {
    // let { players } = this.state;
    // this.setState({players: players.filter(player=>player.id != id)})
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={1 + 10}/>
        {/*play list*/}
        {
          this.state.players.map(player => <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            removePlayer={this.handleRemove}
          />)
        }
      </div>
    )
  }
}

export default App;
