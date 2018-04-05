import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// import HeaderMenu from './Menu';

// class Header extends Component {
//   render() {
const Header = ({ showSales }) => (
  // const { showSale } = this.props;
  <div className="HeaderMenu">
    <Button>Home</Button>
    <Button onClick={() => showSales()}>Sale</Button>
    <Button>About</Button>
  </div>
);
export default Header;
