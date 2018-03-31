import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GameList from './GameList';


export default class Body extends Component {
  // componentDidMount() {
  //   console.log(this, 'body');
  // }
  render() {
    const { switchGames, setSwitchGame } = this.props;
    return (
      <div className="body">
        <GameList switchGames={switchGames} setSwitchGame={setSwitchGame} />
      </div>
    );
  }
}
