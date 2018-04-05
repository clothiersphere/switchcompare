import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GameList from './GameList';
import GameInfo from './gameInfo';


export default class Body extends Component {
  // <GameList switchGames={switchGames} setSwitchGame={setSwitchGame} />
  // componentDidMount() {
  //   console.log(this, 'body');
  // }
  render() {
    // const { switchGames, setSwitchGame } = this.props;
    const { props } = this;
    return (
      <div className="body">
        <Switch>
          <Route path="/game/:gameCode" render={routeProps => <GameInfo {...routeProps} {...props} />} />
          <Route exact path="/sale" render={routeProps => <GameList {...routeProps} {...props} />} />
          <Route exact path="/" render={routeProps => <GameList {...routeProps} {...props} />} />
        </Switch>
      </div>

    );
  }
}

