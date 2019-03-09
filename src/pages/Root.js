import React, {Fragment} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";

export class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // router 생성
      // BrowserRouter는 없는 것 처럼 보여지므로 BrowserRouter의 child는 한번 감싸 줘야한다.
      <BrowserRouter>
        {/*<Fragment> 는 <>로 축약 가능*/}
        <Fragment>
          <p>공통메뉴 영역</p>
          <Route path="/" component={Home}></Route>
          <Route path="/heros" component={Heroes}></Route>
          <Route path="/scoreboard" component={Scoreboard}></Route>
        </Fragment>
      </BrowserRouter>
    );
  }
}