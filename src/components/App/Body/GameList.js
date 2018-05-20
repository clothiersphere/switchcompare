import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import GameCard from './GameCard';
import shortid from 'shortid';
import { Button } from 'semantic-ui-react';


export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      hasMoreItems: true,
      count: 0,
      index: 0,
    };
  }

  loadItems(page) {
    const self = this;

    const games = self.state.games;

    let { switchGames, displayOptions } = this.props;
    // display options
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


      for (let i = start; i < end; i++) {
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

  render() {
    const {
      switchGames,
      setSwitchGame,
      history,
      displayOptions,
      searchTerm,
    } = this.props;

    const loader = <div className="loader" key={shortid.generate()}>Loading ...</div>;
    const games = this.state.games.map((game, i) => {
      const getNsuid = (game) => {
        let nsuid;
        if (game.Nsuid[2]) {
          nsuid = game.Nsuid[2];
        } else {
          nsuid = game.Nsuid;
        }
        return nsuid;
      };

      return (
        <GameCard
          game={game}
          index={i}
          setSwitchGame={setSwitchGame}
          history={history}
          key={shortid.generate()}
        />
      );
    });


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


    const decide = () => {
      if (displayOptions.showAllGames) {
        return showAllGames;
      }
    };

    return (
      <div>
        {decide()}
      </div>
    );
  }
}

