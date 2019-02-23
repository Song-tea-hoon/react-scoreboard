import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";

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
