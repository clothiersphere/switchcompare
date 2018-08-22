import React, { Component } from 'react';
import { Header, Image, Modal, Icon, Table } from 'semantic-ui-react';
import moment from 'moment';
import MetacriticBadge from '../MetacriticBadge';
import PriceCard from '../PriceCard';

export default class GameCardTile extends Component {
  render() {
    const { Published, Metacritic, Prices, RegionsSortedByPrice } = this.props.props.game;

    const gameImage = this.props.props.game.Image;

    let published = moment(Published).format('MM-DD-YYYY');

    return (
      <div className="gameCardTile">
        <div>
          <Image
            className="align-self gameCardTileImage"
            src={gameImage}
            size="tiny"
            onError={e => (e.target.style.display = 'none')}
          />
        </div>
        <div className="gameCardTileInfo">
          <div className="gameCardTileTitle">{this.props.props.game.Title}</div>
          <PriceCard
            prices={Prices}
            regions={RegionsSortedByPrice}
            metaInfo={Metacritic}
            view="tile"
          />
        </div>
      </div>
    );
  }
}
