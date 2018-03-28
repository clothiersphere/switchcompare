import React from 'react';
import { Image } from 'semantic-ui-react';
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
  const gameImage = game.Image;

  return (
  // <div key={getNsuid()}>
    <Image className="align-self" src={gameImage} size="medium" />
  // </div>
  );
};

// {game.Title} {getPrice()}
// <FlagIcon code={countryCode} />

export default GameCard;
