import React from 'react';
import axios from 'axios';
import {Route, Switch} from "react-router-dom";
// scss파일명에 .module을 붙이면 모듈방식으로 전역이 아니라 scoped scss가 된다.
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
import {Hero} from "./Hero";

export class Heroes extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    heroes: []
  };

  handleLoad = (e) => {
    // console.log(e)
    // console.log(e.currentTarget)
  }

  handleClick = (e, hero_id) => {
    e.preventDefault();
    this.props.history.push(`/heroes/hero/${hero_id}`);
  }

  render() {

    return (
      <>
        <Switch>
          {/*/!* path가 부모목록(/heroes/)을 포함 하여야 한다. *!/*/}
          {/*<Route path="/heroes/hero/:hero_id" component={Hero}></Route>*/}
        </Switch>
        <hr className="my-5" />
        <div className="card-columns">
          {this.state.heroes.map(hero => (
            <div className="card" key={hero.hero_id}
                 onClick={ (e) => this.handleClick(e, hero.hero_id)}>
              {/*<NavLink to={`/heroes/hero/${hero.hero_id}`}>*/}
                <img onLoad={this.handleLoad}
                     src={(hero.photo && hero.photo !== 'undefined') ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                     style={{width: '100%'}} alt={hero.name}></img>
                <div className="card-body">
                  <h5 className="card-title">{hero.name}</h5>
                  <p className="card-text">email: {hero.email}</p>
                  <p className="card-text">sex: {hero.sex}</p>
                </div>
              {/*</NavLink>*/}
            </div>
          ))}
        </div>
      </>
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.getHero(nextProps.match.params['hero_id']);
  }

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
    const response = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    this.setState({heroes: response.data})
  }
}