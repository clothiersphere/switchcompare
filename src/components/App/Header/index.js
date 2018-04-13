import React, { Component } from 'react';
import { Button, Icon, Input, Segment } from 'semantic-ui-react';
// import HeaderMenu from './Menu';

// class Header extends Component {
//   render() {
const Header = ({ showGameSales, showAllGames, searchGames }) => (
  // const { showSale } = this.props;
  <div className="HeaderMenu">
    <Icon name="search" size="large" />
    <Input
      className="headerInput"
      placeholder="Search"
      onSubmit={e => searchGames(e.target.value)}
    />
  </div>
);

export default Header;


// <Button>Home</Button>
// <Button onClick={() => showAllGames()}>All Games</Button>
// <Button onClick={() => showGameSales()}>Sale</Button>
// <Button>About</Button>
