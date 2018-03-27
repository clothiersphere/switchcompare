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
    const { switchGames } = this.props;

    return (
      <div className="App">
        <Header />
        <Body switchGames={switchGames} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    switchGames,
  } = state;

  return {
    switchGames,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSwitchGames: () => dispatch(actions.getSwitchGames()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));