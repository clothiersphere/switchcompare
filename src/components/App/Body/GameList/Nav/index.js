import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';
import GenreFilter from '../../GenreFilter';
import SortOptions from '../../SortOptions';
import GameListNavSearchbar from './Searchbar';

export default class GameListNav extends Component {
  render() {
    console.log(this.props, 'gamelistNav');
    const { filterGenre, games } = this.props;
    return (
      <div className="GameListNav">
        <GameListNavSearchbar />
        <GenreFilter filterGenre={filterGenre} games={games} />
        <SortOptions />
        <div className="viewLayout">
          <Button icon>
            <Icon name="grid layout" />
          </Button>
          <Button icon>
            <Icon name="list layout" />
          </Button>
        </div>
      </div>
    );
  }
}
