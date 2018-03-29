import React from 'react';
import { Image } from 'semantic-ui-react';
import MetacriticBadge from './MetacriticBadge';
// import FlagIcon from '../FlagIcon';

const GameCard = ({ game }) => {
  // const getNsuid = () => {
  //   let nsuid = game.Nsuid[2];
  //   if (!game.Nsuid[2]) {
  //     nsuid = game.Nsuid;
  //   }
  //   return nsuid;
  // };
  // const getPrice = () => {
  //   const lowestPriceRegion = game.RegionsSortedByPrice[0];
  //   const lowestPrice = game.Prices[lowestPriceRegion] / 100;
  //   return `$${lowestPrice} + ${lowestPriceRegion}`;
  // };
  // const countryCode = game.RegionsSortedByPrice[0].toLowerCase();
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


  // const showMetacritic = () => {
  //   if (Metacritic.metascore) {
  //     console.log(Metacritic, 'mc');
  //     return (<p> Metacritic.metascore </p>);
  //   }
  //   return null;
  // };

  // const showPrices = () => {
  //   game.Prices.map(price =>
  //     <div />);
  // };

  const gameImage = game.Image;
  const getImage = () => {
    if (game.Image) {
      return game.Image;
    }
    return 'http://via.placeholder.com/500x500';
  };

  return (
    <div className="gameCard">
      <Image className="align-self" src={getImage()} size="medium" />
      <MetacriticBadge metaInfo={Metacritic} />
    </div>
  );
};

// {game.Title} {getPrice()}
// <FlagIcon code={countryCode} />

export default GameCard;
