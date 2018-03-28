import React, { Component } from 'react';
import FlagIcon from '../FlagIcon';
import GameInfo from './gameInfo';

export default class Body extends Component {
  // componentDidMount() {
  //   console.log(this, 'body');
  // }

  renderGameList() {
    return (
      <div>
        {this.props.switchGames.map((game) => {
          const getNsuid = () => {
            let nsuid = game.Nsuid[2];
            if (!game.Nsuid[2]) {
              nsuid = game.Nsuid;
            }
            return nsuid;
          };
          const getPrice = () => {
            const lowestPriceRegion = game.RegionsSortedByPrice[0];
            const lowestPrice = game.Prices[lowestPriceRegion] / 100;
            return `$${lowestPrice} + ${lowestPriceRegion}`;
          };
          const countryCode = game.RegionsSortedByPrice[0].toLowerCase();

          return (
            <div key={getNsuid()}>
              {game.Title} {getPrice()}
              <FlagIcon code={countryCode} />
              <GameInfo game={game} />
            </div>);
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderGameList() }
      </div>
    );
  }
}
