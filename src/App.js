import React from 'react';
import './App.css';
import Header from "./components/Header";
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 0},
      {name: 'HONG', score: 0, id: 1},
      {name: 'KIM', score: 0, id: 2},
      {name: 'PARK', score: 0, id: 3},
    ]
  };

  handleRemove = (id) => {
    // let { players } = this.state;
    // this.setState({players: players.filter(player=>player.id != id)})
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  };

  hadleChangeScore = (id, delta) => {
    this.setState(prevState => ({
      players: prevState.players.map(player => player.id === id ? {...player, score: player.score + delta} : player)
    }))
  };

  // 이벤트는 부모먼저 구현 후 자식에게 내려준다.
  handleAddPlayer = (name) => {
    /*
      deep copy
      담아두는 배열은 새로운 배열
      안에 있는 player는 기존의 object이다.
    */
    this.setState(prevState => {
      let maxId = 0;
      // 삼항연산자
      // this.state.players.forEach(item => item.id > maxId ? (maxId = item.id ) : (maxId = maxId));
      // Logical AND
      this.state.players.forEach(item => item.id > maxId && (maxId = item.id ));
      // ...연산자를 통해서 새로운 배열을 생성
      return {
        players: [
          ...prevState.players,
          {id: maxId + 1, name, score: 0}
        ]
      }
    })
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players}/>
        {/*play list*/}
        {
          this.state.players.map((player, index) => <Player
            // id={player.id}
            // name={player.name}
            // score={player.score}
            {...player}
            key={player.id}
            index={index}
            removePlayer={this.handleRemove}
            changeScore={this.hadleChangeScore}
          />)
        }
        <AddPlayerForm />
      </div>
    )
  }
}

export default App;
