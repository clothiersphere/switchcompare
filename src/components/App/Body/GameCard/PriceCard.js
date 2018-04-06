import React from 'react';
import FlagIcon from '../../FlagIcon';

const PriceCard = ({ prices, regions, metaInfo }) => {
  const countryCode = regions[0].toLowerCase();
  const lowestPrice = prices[regions[0]] / 100;

  return (
    <div className="priceCardSq">
      <div className="priceSq">
        <FlagIcon className="flagIconSq" code={countryCode} />
        <div className="lowestPriceSq">
        ${lowestPrice}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
