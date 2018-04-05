import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// import HeaderMenu from './Menu';

// class Header extends Component {
//   render() {
const Header = ({ showGameSales, showAllGames }) => (
  // const { showSale } = this.props;
  <div className="HeaderMenu">
    <Button onClick={() => showAllGames()}>Home</Button>
    <Button onClick={() => showGameSales()}>Sale</Button>
    <Button>About</Button>
  </div>
);
export default Header;
