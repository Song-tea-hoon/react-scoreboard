import React from 'react';

export class AddPlayerForm extends React.Component {
  // Dom에 접근하기 위한 참조값
  textInput = React.createRef();

  constructor(props) {
    super(props);
  }

  handleValueChange = (e) => {
    // e - SyntheticEvent 이벤트를 공통화(추상화) 해준다.
    console.log(e);
    this.setState({playerName: e.target.value})
  };

  handleSubmit = (e) => {
    // 이벤트를 막지 않으면 페이지가 리프레시 되면서 로컬에 저장되어있던 데이터가 날라간다.
    e.preventDefault();
    // 실재 dom을 참조하여 value를 리턴!
    this.props.addPlayer(this.textInput.current.value);
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
        {/*DOM을 ref에 등록*/}
        <input type="text"
               ref={this.textInput}
               placeholder="enter a player's name"/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }
}