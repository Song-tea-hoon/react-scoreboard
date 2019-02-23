import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 0},
      {name: 'HONG', score: 0, id: 1},
      {name: 'KIM', score: 0, id: 2},
      {name: 'PARK', score: 0, id: 3},
    ]
  }

  handleRemove = (id) => {
    // let { players } = this.state;
    // this.setState({players: players.filter(player=>player.id != id)})
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }

  hadleChangeScore = (id, delta) => {
    this.setState(prevState => ({
      players: prevState.players.map(player => player.id === id ? {...player, score: player.score + delta} : player)
    }))
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={1 + 10}/>
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
      </div>
    )
  }
}

export default App;
