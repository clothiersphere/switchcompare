import React from 'react';
import FlagIcon from '../../FlagIcon';

const PriceCard = ({ prices, regions, metaInfo, view }) => {
  const countryCode = regions[0].toLowerCase();
  const lowestPrice = prices[regions[0]] / 100;

  if (view === 'square') {
    return (
      <div className="priceCardSq">
        <div className="priceSq">
          <FlagIcon className="flagIconSq" code={countryCode} />
          <div className="lowestPriceSq">${lowestPrice}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="priceCardTile">
      <div className="priceTile">
        <div className="lowestPriceTile">${lowestPrice}</div>
        <FlagIcon className="flagIconTile" code={countryCode} />
      </div>
    </div>
  );
};

export default PriceCard;
