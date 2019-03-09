import React from 'react';
import './App.css';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";


class App extends React.Component {

  // handleRemove = (id) => {
  //   this.setState(prevState => ({
  //     players: prevState.players.filter(player => player.id !== id)
  //   }))
  // };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.props.players}/>
        {/*play list*/}
        {
          this.props.players.map((player, index) => <Player
            {...player}
            key={player.id}
            index={index}
          />)
        }
        <AddPlayerForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  players: state.playerReducer.players
})

export default connect(mapStateToProps)(App); // <- HOC( High order Component )로 변환
