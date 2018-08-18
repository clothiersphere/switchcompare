import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

export default class GameListNavSearchbar extends Component {
  render() {
    return (
      <div className="GameListNavSearchbar">
        <Input icon="search" focus placeholder="Search.." />
      </div>
    );
  }
}
