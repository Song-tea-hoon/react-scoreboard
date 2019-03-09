import React from 'react';
import axios from 'axios';
// scss파일명에 .module을 붙이면 모듈방식으로 전역이 아니라 scoped scss가 된다.
// https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet
import styles  from './Heroes.module.scss';

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

  render() {
    console.log(styles);
    return (
      <div className="card-columns">
        {this.state.heroes.map(hero => (
            <div className="card">
              <img onLoad={this.handleLoad} src={ (hero.photo && hero.photo !== 'undefined') ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'}
                   style={{width: '100%'}} alt={hero.name}></img>
              <div className="card-body">
                <h5 className="card-title">{hero.name}</h5>
                <p className="card-text">email: {hero.email}</p>
                <p className="card-text">sex: {hero.sex}</p>
              </div>
            </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.getHeroes();
  }

  getHeroes = async () => {
    const response = await axios.get('http://eastflag.co.kr:8080/api/heroes');
    this.setState({heroes: response.data})
  }
}