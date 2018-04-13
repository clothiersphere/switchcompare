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
    this.props.getSwitchGames();
  }

  render() {
    const {
      switchGames,
      setSwitchGame,
      showOnSale,
      showAllGames,
      gamesDisplayOptions,
      searchGames,
      searchTerm,

    } = this.props;


    return (
      <div className="App">
        <Header
          searchGames={searchGames}
          showAllGames={showAllGames}
          showOnSale={showOnSale}
        />
        <Body
          searchTerm={searchTerm}
          switchGames={switchGames}
          setSwitchGame={setSwitchGame}
          gamesDisplayOptions={gamesDisplayOptions}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    searchGames,
    searchTerm,
    switchGames,
    selectedGame,
    gamesDisplayOptions,
  } = state;


  return {
    searchTerm,
    searchGames,
    switchGames,
    selectedGame,
    gamesDisplayOptions,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSwitchGames: () => dispatch(actions.getSwitchGames()),
    setSwitchGame: game => dispatch(actions.setSwitchGame(game)),
    showOnSale: () => dispatch(actions.showOnSale()),
    showAllGames: () => dispatch(actions.showAllGames()),
    searchGames: term => dispatch(actions.searchGames(term)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
