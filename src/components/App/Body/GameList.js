import React, { Component } from 'react';
import GameCard from './GameCard';

export default class GameList extends Component {
  render() {
    const {
      switchGames,
      setSwitchGame,
      history,
      gamesDisplayOptions,
      searchTerm,
    } = this.props;

    const { term } = this.props.searchTerm;
    // let games = switchGames.filter(game => Object.hasOwnProperty.call(game, 'Sale'));
    let games = switchGames;

    if (term !== '') {
      games = games.filter(game => game.title_lower.includes(term));
    }

    const getNsuid = (game) => {
      let nsuid = game.Nsuid[2];
      if (!game.Nsuid[2]) {
        nsuid = game.Nsuid;
      }
      return nsuid;
    };

    const showGames = () => games.map((game, i) => (
      <GameCard
        game={game}
        index={i}
        key={getNsuid(game)}
        setSwitchGame={setSwitchGame}
        history={history}
      />
    ));

    return (
      <div className="gameList">
        {showGames()}
      </div>
    );
  }
}

