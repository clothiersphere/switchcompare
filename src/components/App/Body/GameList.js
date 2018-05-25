import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Button, Segment, Icon, Menu } from 'semantic-ui-react';
import shortid from 'shortid';
import GameCard from './GameCard';


import GenreFilter from './GenreFilter';


class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      hasMoreItems: true,
      count: 0,
      index: 0,
      calendar: false,
      price: false,
      score: false,
      percent: false,

    };
  }

  loadItems(page) {
    const self = this;

    const games = self.state.games;

    let { switchGames, displayOptions } = this.props;
    if (displayOptions.showOnSale) {
      switchGames = switchGames.filter(game => Object.hasOwnProperty.call(game, 'Sale'));
    }

    if (switchGames.length > 1) {
      const start = self.state.index;
      let end = self.state.index + 7;
      const lastPosition = switchGames.length - 1;

      if (!switchGames[end]) {
        end = lastPosition;
      }

      for (let i = start; i < end; i += 1) {
        games.push(switchGames[i]);
      }

      if (self.state.index <= lastPosition - 7) {
        self.setState({
          games,
          count: self.state.count + 1,
          index: end,
        });
      } else {
        self.setState({
          hasMoreItems: false,
        });
      }
    }
  }

  handleClick = (e, { name }) => {
    this.setState({ [`${name}`]: !this.state[`${name}`] });
  }

  render() {
    const {
      switchGames,
      setSwitchGame,
      history,
      displayOptions,
      searchTerm,
    } = this.props;

    const {
      calendar,
      price,
      score,
      percent,
    } = this.state;

    const getNsuid = (game) => {
      let nsuid;
      if (game.Nsuid[2]) {
        nsuid = game.Nsuid[2];
      } else {
        nsuid = game.Nsuid;
      }
      return nsuid;
    };

    const loader = <div className="loader" key={shortid.generate()}>Loading ...</div>;

    const games = this.state.games.map((game, i) => (
      <GameCard
        game={game}
        index={getNsuid(game)}
        setSwitchGame={setSwitchGame}
        key={shortid.generate()}
      />
    ));


    let saleGames = switchGames.filter(game => game.hasOwnProperty('Sale'));
    saleGames = saleGames.slice(0, 5);

    const onSale = saleGames.map((game, i) => (
      <GameCard
        game={game}
        index={getNsuid(game)}
        setSwitchGame={setSwitchGame}
        key={shortid.generate()}
      />
    ));

    const recentGames = switchGames.slice(switchGames.length - 6, switchGames.length - 1);

    const recent = recentGames.map((game, i) => (
      <GameCard
        game={game}
        index={getNsuid(game)}
        setSwitchGame={setSwitchGame}
        key={shortid.generate()}
      />
    ));

    const divStyle = {
      height: '760px',
      overflow: 'auto',
    };


    const showAllGames = (<div>
      <div style={divStyle}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}
          useWindow={false}
        >
          <div className="gameList">
            {games}
          </div>
        </InfiniteScroll>
      </div>
                          </div>);

    return (
      <div>
        <Segment>
          <GenreFilter games={switchGames} />
        </Segment>
        Sort by:
        <Button name="calendar" toggle active={calendar} onClick={this.handleClick} as="div" icon>
          <Icon name="calendar" />
            Release Date
        </Button>
        <Button name="price" toggle active={price} onClick={this.handleClick} icon>
          <Icon name="dollar" />
            Price
        </Button>
        <Button name="score" toggle active={score} onClick={this.handleClick} icon>
            Metacritic Score
        </Button>
        <Button toggle active={percent} onClick={this.handleClick} icon>
          <Icon name="percent" />
            Off
        </Button>

        {showAllGames}
      </div>
    );
  }
}

export default GameList;

