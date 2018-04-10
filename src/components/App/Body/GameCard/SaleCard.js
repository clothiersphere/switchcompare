import React from 'react';
import moment from 'moment';
import FlagIcon from '../../FlagIcon';


const SaleCard = ({ prices, sale, regions }) => {
  if (!sale) {
    return null;
  }

  const { RegionsSortedByPrice, Prices } = sale;

  const lowestSalePrice = Prices[RegionsSortedByPrice[0]].Price / 100;
  const countryCode = RegionsSortedByPrice[0].toLowerCase();
  const regularPrice = prices[RegionsSortedByPrice[0]] / 100;
  const pricePercentageDifference = 100 - (((lowestSalePrice / regularPrice).toFixed(2)) * 100);
  const saleDate = Prices[RegionsSortedByPrice[0]].End;
  const saleEnd = moment(saleDate).format('h:mm a MM/DD/YY');

  return (
    <div className="saleCard">
      <div className="salePrice">
        <FlagIcon className="flagIconTile" code={countryCode} />
         ${lowestSalePrice} <span className="saleCardRegularPrice"> ${regularPrice} </span>{pricePercentageDifference}% Off
      </div>
      <div />
    </div>
  );
};

export default SaleCard;
