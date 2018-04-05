import React, { Component } from 'react';
import GameCard from './GameCard';


export default class GameList extends Component {
  componentDidMount() {

  }

  componentWillReceiveProps() {

  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showSale: false,
  //   };
  // }

  render() {
    const {
      switchGames,
      setSwitchGame,
      history,
      gamesDisplayOptions,
    } = this.props;

    let games = switchGames;

    if (gamesDisplayOptions.showSales) {
      games = switchGames.filter(game => Object.hasOwnProperty.call(game, 'Sale'));
    }

    const getNsuid = (game) => {
      let nsuid = game.Nsuid[2];
      if (!game.Nsuid[2]) {
        nsuid = game.Nsuid;
      }
      return nsuid;
    };

    console.log(games.length);

    return (
      <div className="gameList">
        {games.map((game, i) => (
          <GameCard
            game={game}
            index={i}
            key={getNsuid(game)}
            setSwitchGame={setSwitchGame}
            history={history}
          />
            ))}
      </div>
    );
  }
}

