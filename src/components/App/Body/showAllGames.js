import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { Button, Segment, Icon, Menu } from 'semantic-ui-react';
import shortid from 'shortid';
import GameCard from './GameCard';
import SortOptions from './SortOptions';
import GenreFilter from './GenreFilter';

class ShowAllGames extends Component {
  constructor(props) {
    super(props);
    // this.updateGames = this.updateGames.bind(this);

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

  componentWillReceiveProps(nextProps) {
    console.log(this.props.displayOptions.release.enabled, 'release');
    console.log(this.props.displayOptions.price.enabled, 'price');

    if (this.props.switchGames !== nextProps.switchGames && this.state.games.length !== 0) {
      const gameLen = this.state.games.length;
      console.log(gameLen, 'gamelength');
      const newGames = nextProps.switchGames.slice(0, gameLen);
      console.log(newGames, 'newgames');
      this.setState({ games: newGames });
    } else if (this.props.displayOptions !== nextProps.displayOptions) {
      const gameLen = this.state.games.length;
      const newGames = nextProps.switchGames.slice(0, gameLen);
      console.log(newGames, 'newgamesDisplay');
      this.setState({ games: newGames });
    }
  }

  loadItems(page) {
    const self = this;
    const { games } = self.state;

    if (this.props.switchGames.length > 1) {
      const start = self.state.index;
      let end = self.state.index + 7;
      const lastPosition = this.props.switchGames.length - 1;
      if (!this.props.switchGames[end]) {
        end = lastPosition;
      }

      for (let i = start; i < end; i += 1) {
        games.push(this.props.switchGames[i]);
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

  render() {
    const {
      setSwitchGame,
      history,
      displayOptions,
      searchTerm,
      toggleDisplaySort,
      switchGames,
    } = this.props;

    if (displayOptions.toggleTileView) {
      view = 'tile';
    }

    const getNsuid = game => {
      let nsuid;
      if (game.Nsuid[2]) {
        nsuid = game.Nsuid[2];
      } else {
        nsuid = game.Nsuid;
      }
      return nsuid;
    };

    let view = 'grid';

    const loader = (
      <div className="loader" key={shortid.generate()}>
        Loading ...
      </div>
    );

    const games = this.state.games.map(game => (
      // const games = switchGames.map(game => (
      <GameCard
        displayOptions={displayOptions}
        view={view}
        game={game}
        index={getNsuid(game)}
        setSwitchGame={setSwitchGame}
        key={shortid.generate()}
      />
    ));

    const divStyle = {
      height: '660px',
      overflow: 'auto',
    };

    return (
      <div style={divStyle}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}
          useWindow={false}
        >
          <div className="gameList">{games}</div>
        </InfiniteScroll>
      </div>
    );

    // return (
    //   <div className="gameList">
    //     {games}
    //   </div>);
  }
}

export default ShowAllGames;
