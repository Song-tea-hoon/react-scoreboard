import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import {Menu} from "./Menu";

export class Root extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      // router 생성
      // BrowserRouter는 Element가 없는 것 처럼 보여지므로 BrowserRouter의 child는 한번 감싸 줘야한다.
      <BrowserRouter>
        {/*<Fragment> 는 <>로 축약 가능*/}
        <>
          <Menu/>
          {/* switch는 일치하는 path의 페이지를 노출한다.
              그런데 path의 string의 맨앞부터 비교를 하는데 "/heros"에도 "/"가 포함되므로
              Home에서 일치한다고 판단 항상 Home을 노출한다.
              그래서 exact를 추가하여 path가 완벽히 일치하는 메뉴 하나만 노출하도록 한다. */}
          <div className="container" style={{backgroundColor: '#fff'}}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/heros" component={Heroes}/>
              <Route exact path="/scoreboard" component={Scoreboard}/>
            </Switch>
          </div>
        </>
      </BrowserRouter>
    );
  }
}