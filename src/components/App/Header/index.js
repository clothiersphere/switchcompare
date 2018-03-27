import React, { Component } from 'react';
import HeaderMenu from './Menu';

class Header extends Component {
  
  render() {
    return (
      <div className="Header"> 
        <HeaderMenu />
      </div>
    );
  }
}

export default Header;
