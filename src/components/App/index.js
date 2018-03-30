import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Body from './Body';
import Header from './Header';

class App extends Component {
  componentDidMount() {
    const { getSwitchGames, setSwitchGame } = this.props;
    getSwitchGames();
  }

  render() {
    const { switchGames, setSwitchGame } = this.props;

    return (
      <div className="App">
        <Header />
        <Body switchGames={switchGames} setSwitchGame={setSwitchGame} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    switchGames,
    selectedGame,
  } = state;

  return {
    switchGames,
    selectedGame,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSwitchGames: () => dispatch(actions.getSwitchGames()),
    setSwitchGame: game => dispatch(actions.setSwitchGame(game)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
