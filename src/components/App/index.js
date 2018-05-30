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
      displayOptions,
      searchGames,
      searchTerm,
      toggleSidebar,
      history,
      toggleDisplaySort,
      filterGenre,
    } = this.props;

    return (
      <div className="App">
        <Header
          searchGames={searchGames}
          showAllGames={showAllGames}
          showOnSale={showOnSale}
          toggleSidebar={toggleSidebar}
          displayOptions={displayOptions}
          history={history}
        />
        <Body
          searchTerm={searchTerm}
          switchGames={switchGames}
          setSwitchGame={setSwitchGame}
          displayOptions={displayOptions}
          history={history}
          toggleDisplaySort={toggleDisplaySort}
          filterGenre={filterGenre}
        />
        <div className="footer" />
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
    displayOptions,
    toggleDisplaySort,
    filterGenre,
  } = state;

  return {
    searchTerm,
    searchGames,
    switchGames,
    selectedGame,
    displayOptions,
    toggleDisplaySort,
    filterGenre,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSwitchGames: () => dispatch(actions.getSwitchGames()),
    setSwitchGame: game => dispatch(actions.setSwitchGame(game)),
    showOnSale: () => dispatch(actions.showOnSale()),
    showAllGames: () => dispatch(actions.showAllGames()),
    searchGames: term => dispatch(actions.searchGames(term)),
    toggleSidebar: () => dispatch(actions.toggleSidebar()),
    toggleDisplaySort: method => dispatch(actions.toggleDisplaySort(method)),
    filterGenre: term => dispatch(actions.filterGenre(term)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
