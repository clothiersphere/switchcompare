import React from 'react';
import FlagIcon from '../../FlagIcon';
import MetacriticBadge from './MetacriticBadge';

const PriceCard = ({ prices, regions, metaInfo }) => {
  const countryCode = regions[0].toLowerCase();
  const lowestPrice = prices[regions[0]] / 100;

  return (
    <div className="priceCard">
      <FlagIcon className="flagIcon" code={countryCode} />
      <div className="lowestPrice">
        ${lowestPrice}
      </div>
      <MetacriticBadge metaInfo={metaInfo} />
    </div>
  );
};

export default PriceCard;
