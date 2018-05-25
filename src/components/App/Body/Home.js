import React from 'react';
import shortid from 'shortid';
import GameCard from './GameCard';

const Home = (props) => {
  const {
    switchGames,
    setSwitchGame,
    history,
    displayOptions,
    searchTerm,
  } = props;

  let saleGames = switchGames.filter(game => game.hasOwnProperty('Sale'));
  saleGames = saleGames.slice(0, 5);

  const onSale = saleGames.map((game, i) => (
    <GameCard
      game={game}
      index={i}
      setSwitchGame={setSwitchGame}
      history={history}
      key={shortid.generate()}
    />
  ));

  const recentGames = switchGames.slice(switchGames.length - 6, switchGames.length - 1);
  const recent = recentGames.map((game, i) => (
    <GameCard
      game={game}
      index={i}
      setSwitchGame={setSwitchGame}
      history={history}
      key={shortid.generate()}
    />
  ));

  return (
    <div style={{ height: '760px' }}>
      <div>
          On Sale
        <div className="gameList">
          {onSale}
        </div>
      </div>
      <div>
          Recent Releases
        <div className="gameList">
          {recent}
        </div>
      </div>
    </div>
  );
};

export default Home;
