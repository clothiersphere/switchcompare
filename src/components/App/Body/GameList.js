import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import sortBy from 'sort-array';
import { Button, Segment, Icon, Menu } from 'semantic-ui-react';
import shortid from 'shortid';
import GameCard from './GameCard';
import SortOptions from './SortOptions';
import GenreFilter from './GenreFilter';
import ShowAllGames from './showAllGames';
import GameListNav from './GameListNav';

class GameList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
      hasMoreItems: true,
      count: 0,
      index: 0,
      release: false,
      price: false,
      sale: false,
      score: false,
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps.displayOptions.sale.enabled, 'CWRP');
  //   console.log(this.props.displayOptions.sale.enabled, 'CWRP');
  //   if (nextProps.displayOptions !== this.props.displayOptions) {
  //     this.setState({ temp: this.props.switchGames });
  //   }
  // }

  render() {
    const {
      setSwitchGame,
      history,
      displayOptions,
      searchTerm,
      toggleDisplaySort,
      switchGames,
      location,
      filterGenre,
      genreFilter,
    } = this.props;

    let games = switchGames;

    if (genreFilter.length > 0) {
      const filterTerms = genreFilter.toString();

      console.log(filterTerms, 'filterTerms');
      for (let i = 0; i < genreFilter.length; i++) {
        games = games.filter(game => game.Categories.includes(genreFilter[i]));
      }

      console.log(games.length, 'gamelist');
    }

    if (location.pathname === '/sale') {
      games = games.filter(game => Object.hasOwnProperty.call(game, 'Sale'));
    }

    if (displayOptions.release.enabled) {
      // console.log(games[0], 'games');
      sortBy(games, 'Published');
      // games.reverse();
      // console.log(games[0], 'games');
    }
    if (displayOptions.score.enabled) {
      sortBy(games, ['score', 'Price']);
      games.reverse();
    }

    if (displayOptions.price.enabled) {
      sortBy(games, ['lowestPrice', 'Title']);
      // games.reverse();
    }

    return (
      <div>
        <div className="GameListNavContainer">
          <GameListNav
            filterGenre={filterGenre}
            games={switchGames}
            toggleDisplaySort={toggleDisplaySort}
          />
        <ShowAllGames displayOptions={displayOptions} switchGames={games} />
        </div>
      </div>
    );
  }
}

export default GameList;
