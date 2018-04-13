import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import GameCard from './GameCard';
import shortid from 'shortid';


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

    let { switchGames, gamesDisplayOptions } = this.props;
    // display options
    if (gamesDisplayOptions.showOnSale) {
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
      gamesDisplayOptions,
      searchTerm,
    } = this.props;

    // const loadItems = (page) => {


      // const self = this;

      // const temp = [];
      // const switchGames = this.props.switchGames;
      // console.log(this.props, 'thisPropsSwitch');

      // for (let i = 0; i < 4; i++) {
      //   temp.push(this.props.switchGames[i]);
      // }

      // if (temp[temp.length - 1] != switchGames[switchGames.length - 1]) {
      //   self.setState({
      //     games: temp,
      //   });
      // } else {
      //   self.setState({
      //     hasMoreItems: false,
      //   });
      // }
    // };

    // const { term } = this.props.searchTerm;
    // let games = switchGames.filter(game => Object.hasOwnProperty.call(game, 'Sale'));
    // let games = switchGames;

    // if (term !== '') {
    //   games = games.filter(game => game.title_lower.includes(term));
    //   console.log(games, 'games');
    // }


    // const showGames = () => {
    //   if (games.length < 1) {
    //     return (
    //       <div>
    //         <h3>No Games Found.</h3>
    //       </div>
    //     );
    //   }

    //   games = games.slice(0, 8);

    //   return games.map((game, i) => (
    //     <GameCard
    //       game={game}
    //       index={i}
    //       key={getNsuid(game)}
    //       setSwitchGame={setSwitchGame}
    //       history={history}
    //     />
    //   ));
    // };

    // return (
    //   <div className="gameList">
    //     {showGames()}
    //   </div>
    // );


    const loader = <div className="loader" key={shortid.generate()}>Loading ...</div>;


    // if (this.state.games.length === 0) {
    //   games = null;
    // }


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
      height: '800px',
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
          <div className="gameList">
            {games}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

