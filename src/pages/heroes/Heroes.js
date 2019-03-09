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

  render() {
    console.log(styles);
    return (
      <ul className={styles["img-box"]}>
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id} className="row align-items-center m-0">
              <div className="col-1 py-2">
                <img src={ (hero.photo && hero.photo !== 'undefined') ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} alt={hero.name} className="img-fluid rounded-circle" />
              </div>
              <span className="col">{hero.name}</span>
            </li>
          ))
        }
      </ul>
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