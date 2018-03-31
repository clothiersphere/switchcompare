import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import PriceCard from './PriceCard';
import MetacriticBadge from './MetacriticBadge';


const GameCard = ({ game, setSwitchGame, index }) => {
  const {
    Categories,
    Excerpt,
    Metacritic,
    Prices,
    Published,
    RegionsSortedByPrice,
    Title,
    Url,
  } = game;

  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      setSwitchGame(game);
    }
  };

  return (
    <div className="gameCard" tabIndex={index} onKeyDown={() => handleKeyDown} onClick={() => setSwitchGame(game)} role="button">
      <Image className="align-self gameImage" src={game.Image} size="medium" />
      <div className="publisherDateCard">
        {Published}
        <MetacriticBadge metaInfo={Metacritic} />
      </div>
      <PriceCard prices={Prices} regions={RegionsSortedByPrice} metaInfo={Metacritic} />
    </div>
  );
};

export default GameCard;
