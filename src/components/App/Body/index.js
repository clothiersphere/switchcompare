import React, { Component } from 'react';

export default class Body extends Component {
  componentDidMount() {
    console.log(this, 'body');
  }

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
          return <div key={getNsuid()}>{game.Title} {getPrice()} </div>;
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
