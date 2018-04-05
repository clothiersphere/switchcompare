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
    const { getSwitchGames } = this.props;
    getSwitchGames();
  }

  render() {
    const {
      switchGames, setSwitchGame, showSales, gamesDisplayOptions,
    } = this.props;

    return (
      <div className="App">
        <Header showSales={showSales} />
        <Body switchGames={switchGames} setSwitchGame={setSwitchGame} gamesDisplayOptions={gamesDisplayOptions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    switchGames,
    selectedGame,
    gamesDisplayOptions,
  } = state;

  return {
    switchGames,
    selectedGame,
    gamesDisplayOptions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSwitchGames: () => dispatch(actions.getSwitchGames()),
    setSwitchGame: game => dispatch(actions.setSwitchGame(game)),
    showSales: () => dispatch(actions.showSales()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
