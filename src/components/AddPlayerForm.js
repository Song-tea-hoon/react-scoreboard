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

  handleSubmit = (e) => {
    // 이벤트를 막지 않으면 페이지가 리프레시 되면서 로컬에 저장되어있던 데이터가 날라간다.
    e.preventDefault();
    this.props.addPlayer(this.state.playerName);
    // 폼초기화
    this.setState({playerName: ''});
  }

  render() {
    return (
      /*
      form에 submit이벤트를 거는 이유
      valudation체크의 용이
      enter버튼을 사용가능
      */
      <form onSubmit={this.handleSubmit}>
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