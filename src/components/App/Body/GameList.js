import React from 'react';
import GameCard from './GameCard';

const GameList = ({ switchGames, setSwitchGame }) => (
  <div className="gameList">
    {switchGames.map((game, i) => {
          const getNsuid = () => {
            let nsuid = game.Nsuid[2];
            if (!game.Nsuid[2]) {
              nsuid = game.Nsuid;
            }
            return nsuid;
          };
          return (
            <GameCard
              game={game}
              index={i}
              key={getNsuid()}
              setSwitchGame={setSwitchGame}
            />
          );
        })}
  </div>
);

export default GameList;
