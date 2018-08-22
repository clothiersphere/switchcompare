import React, { Component } from 'react';
import { Header, Image, Modal, Icon, Table } from 'semantic-ui-react';
import MetacriticBadge from '../MetacriticBadge';
import PriceCard from '../PriceCard';

export default class GameCardSquare extends Component {
  render() {
    const { Published, Metacritic, Prices, RegionsSortedByPrice } = this.props.props.game;

    const gameImage = this.props.props.game.Image;
    return (
      <div className="gameCardSq">
        <Image
          className="align-self gameCardSqImage"
          src={gameImage}
          size="small"
          onError={e => (e.target.style.display = 'none')}
        />
        <div className="publisherDateCard">
          {Published}
          <MetacriticBadge display="gameCard" metaInfo={Metacritic} />
        </div>
        <PriceCard
          prices={Prices}
          regions={RegionsSortedByPrice}
          metaInfo={Metacritic}
          view="square"
        />
      </div>
    );
  }
}
