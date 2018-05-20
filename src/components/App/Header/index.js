import React, { Component } from 'react';
import { Menu, Button, Icon, Input, Segment, Image, Checkbox } from 'semantic-ui-react';
import imgUrl from '../../../../public/images/switch_controller_slice.jpg';
import SwitchLogo from '../../../../public/images/switch_logo.png';

console.log(imgUrl, 'help');


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const {
      showGameSales,
      showAllGames,
      searchGames,
      toggleSidebar,
      displayOptions,
    } = this.props;

    const { activeItem } = this.state;

    return (
      <div className="HeaderMenu">
        <Menu size="massive" pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name="all games" active={activeItem === 'all games'} onClick={this.handleItemClick} />
          <Menu.Item name="on sale" active={activeItem === 'sale'} onClick={this.handleItemClick} />
          <Menu.Item name="recent releases" active={activeItem === 'recent releases'} onClick={this.handleItemClick} />
          <Menu.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Header;

// <div className="sortboxes">
// <Checkbox label="metacritic" />
// <Checkbox label="percentage" />
// <Checkbox label="release date" />
// </div>

// <div className="headerMenuButtons">
//   <Button.Group>
//     <Button circular icon="list layout" />
//     <Button circular icon="block layout" />
//   </Button.Group>
// </div>


// <Button>Home</Button>
// <Button onClick={() => showAllGames()}>All Games</Button>
// <Button onClick={() => showGameSales()}>Sale</Button>
// <Button>About</Button>


// <div>
// <Button className="sidebarButton" size="large" onClick={() => toggleSidebar()}><Icon size="big" name={sidebarButton} /></Button>
// </div>
