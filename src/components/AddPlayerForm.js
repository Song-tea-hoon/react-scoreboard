import React from 'react';

export class AddPlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    }
  }

  handleValueChange = (e) => {
    // e - SyntheticEvent 이벤트를 공통화(추상화) 해준다.
    console.log(e);
    this.setState({playerName: e.target.value})
  };

  render() {
    return (
      <form action="">
        <input type="text"
                /*
                - 기본 value만 설정을 해주면 value값의 변경을 해줘야하는 handler가 반드시 들어가야한다
                - one way바인딩 이므로 값을 state에 적용하는 handler를 요구한다.
                (미 설정시 핸들러를 만들거나 readonly롤 설정해야 한다는 error발생)
                */
               value={this.state.playerName}
               onChange={this.handleValueChange}
               placeholder="enter a player's name"/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}