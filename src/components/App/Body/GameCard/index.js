import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import PriceCard from './PriceCard';


const GameCard = ({ game, setSwitchGame }) => {
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

  // console.log(game.Image, 'gameimage');
  // const gameImage = game.Image;
  const handleKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      setSwitchGame(game);
    }
  };

  return (
    <div className="gameCard" onKeyDown={() => handleKeyDown}>
      <Image className="align-self gameImage" onClick={() => setSwitchGame(game)} src={game.Image} size="medium" />
      <PriceCard prices={Prices} regions={RegionsSortedByPrice} metaInfo={Metacritic} />
    </div>
  );
};

export default GameCard;
