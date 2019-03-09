import React from 'react';
import {connect} from "react-redux";
import Header from "../../components/Header";
import Player from "../../components/Player";
import AddPlayerForm from "../../components/AddPlayerForm";
import styles from './Scoreboard.module.css';

class Scoreboard extends React.Component {

  render() {
    return (
      <div className={styles.scoreboard}>
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
});

export default connect(mapStateToProps)(Scoreboard); // <- HOC( High order Component )로 변환
