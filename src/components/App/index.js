import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import * as actions from '../../actions';
import Body from './Body';
import HeaderNav from './HeaderNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.props.getSwitchGames();
  }

  handleButtonClick = () => this.setState({ visible: !this.state.visible });
  handleSidebarHide = () => this.setState({ visible: false });

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
      genreFilter,
    } = this.props;

    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.handleButtonClick}> Toggle visibilty </Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <div className="App">
                <HeaderNav
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
                  genreFilter={genreFilter}
                />
                <div className="footer" />
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
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
    genreFilter,
  } = state;

  return {
    searchTerm,
    searchGames,
    switchGames,
    selectedGame,
    displayOptions,
    toggleDisplaySort,
    genreFilter,
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
