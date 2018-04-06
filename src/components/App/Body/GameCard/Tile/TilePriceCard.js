import React from 'react';
import PriceCard from '../PriceCard';
import SaleCard from '../SaleCard';

const TilePriceCard = ({ prices, sale, regions }) => (
  <div className="gameCardTilePrices">
    <SaleCard prices={prices} sale={sale} regions={regions} />
  </div>
);

export default TilePriceCard;
