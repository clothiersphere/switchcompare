import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import GameList from './GameList';
import GameInfo from './gameInfo';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toggleVisibility() { this.setState({ visible: !this.state.visible }); }

  render() {
    const { props } = this;
    const { visible } = this.state;

    return (
      <div className="body">
        <Button className="sidebarButton" size="large" onClick={() => this.toggleVisibility()}><Icon size="big" name="sidebar" /></Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation="scale down" direction="top" visible={visible} inverted>
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="recent_releases">
              Recent Releases
            </Menu.Item>
            <Menu.Item name="coming_soon">
              Coming Soon
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Switch>
                <Route path="/game/:gameCode" render={routeProps => <GameInfo {...routeProps} {...props} />} />
                <Route exact path="/sale" render={routeProps => <GameList {...routeProps} {...props} />} />
                <Route exact path="/" render={routeProps => <GameList {...routeProps} {...props} />} />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>

    );
  }
}

