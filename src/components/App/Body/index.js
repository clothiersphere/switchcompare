import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GameList from './GameList';
import Home from './Home';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { props } = this;
    // console.log(props, 'props');

    return (
      <div className="body">
        <Switch>
          <Route exact path="/all" render={routeProps => <GameList {...routeProps} {...props} />} />
          <Route exact path="/sale" render={routeProps => <GameList {...routeProps} {...props} />} />
          <Route exact path="/" render={routeProps => <Home {...routeProps} {...props} />} />
        </Switch>
      </div>

    );
  }
}

