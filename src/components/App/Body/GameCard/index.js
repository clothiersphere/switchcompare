import React, { Component } from 'react';
import { Header, Image, Modal, Icon } from 'semantic-ui-react';
import countries from 'i18n-iso-countries';
import FlagIcon from '../../FlagIcon';
import PriceCard from './PriceCard';
import SaleCard from './SaleCard';
import MetacriticBadge from './MetacriticBadge';
import TilePriceCard from './Tile/TilePriceCard';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

export default class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleClick() {
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
  }

  render() {
    const {
      Categories,
      Excerpt,
      Metacritic,
      Prices,
      Published,
      RegionsSortedByPrice,
      Title,
      Url,
      GameCode,
      title_lower,
      Nsuid,
      Sale,
    } = this.props.game;

    const handleKeyDown = (ev) => {
      if (ev.keyCode === 13) {
        this.handleClick();
      }
    };

    const showCategories = () => {
      let result = null;
      Categories.forEach((category, i) => {
        if (i === 0) {
          result = category;
        } else {
          result += category;
        }
      });
      return result;
    };

    const showPriceList = () => (
      <ul className="gameCardPriceList">
        {RegionsSortedByPrice.map((region) => {
          let country = null;
          if (region === 'US') {
            country = 'USA';
          } else {
            country = countries.getName(region, 'en');
          }

          const countryCode = region.toLowerCase();
          return (
            <li className="gameCardPriceEntry" key={GameCode + countryCode}>
              <div className="gameCardFlagCountry">
                <FlagIcon className="flagIcon" code={countryCode} />
                {country}
              </div>
              <div className="gameCardPriceAmount">
                 ${(Prices[region] / 100).toFixed(2)}
              </div>
            </li>
          );
        })}
      </ul>
    );

    const showCheapList = () => {
      const cheapest = RegionsSortedByPrice.slice(0, 5);
      return (
        <ul className="gameCardPriceList">
          {cheapest.map((region) => {
            let country = null;
            if (region === 'US') {
              country = 'USA';
            } else {
              country = countries.getName(region, 'en');
            }

            const countryCode = region.toLowerCase();
            return (
              <li className="gameCardPriceEntry" key={GameCode + countryCode}>
                <div className="gameCardFlagCountry">
                  <FlagIcon className="flagIcon" code={countryCode} />
                  {country}
                </div>
                <div className="gameCardPriceAmount">
                   ${(Prices[region] / 100).toFixed(2)}
                </div>
              </li>
            );
          })}
        </ul>
      );
    };

    const lowestPrice = () => {
      let lowestComparedPrice = null;
      let lowestPriceRegion = null;

      if (Object.hasOwnProperty.call(Prices, 'Sale')) {
        if (Prices[RegionsSortedByPrice[0]] > Sale.Prices[Sale.RegionsSortedByPrice[0]].Price) {
          lowestComparedPrice = Sale.Prices[RegionsSortedByPrice[0]].Price;
          lowestPriceRegion = Sale.RegionsSortedByPrice[0];
        }
      }

      lowestComparedPrice = Prices[RegionsSortedByPrice[0]];
      lowestPriceRegion = RegionsSortedByPrice[0];


      return (
        <div className="lowestComparedPrice">
          Lowest Price:<FlagIcon className="flagIconSq" code={lowestPriceRegion.toLowerCase()} />
          ${(lowestComparedPrice / 100).toFixed(2)}
        </div>
      );
    };


    const gameImage = this.props.game.Image;
    const nintendoOfficialUrl = `https://www.nintendo.co.uk/${Url}`;
    const datePublished = new Date(Published);

    const gameCardSQ = (
      <div
        className="gameCardSQ"
        onKeyDown={() => handleKeyDown}
        onClick={() => this.handleClick()}
        role="button"
      >
        <Image className="align-self gameCardSQImage" src={gameImage} size="medium" />
        <div className="publisherDateCard">
          {Published}
          <MetacriticBadge display="gameCard" metaInfo={Metacritic} />
        </div>
        <PriceCard prices={Prices} regions={RegionsSortedByPrice} metaInfo={Metacritic} />
      </div>
    );

    const gameCardTile = () => (
      <div
        className="gameCardTile"
        onKeyDown={() => handleKeyDown}
        onClick={() => this.handleClick()}
        role="button"
      >
        <div>
          <Image className="align-self gameCardTileImage" src={gameImage} size="tiny" />
        </div>
        <div className="gameCardTileInfo">
          {Title}
          <MetacriticBadge display="gameCardTile" metaInfo={Metacritic} />
          <TilePriceCard prices={Prices} sale={Sale} regions={RegionsSortedByPrice} />
          {lowestPrice()}
        </div>
      </div>
    );

    return (
      <div>
        {gameCardTile()}
        <div>
          <Modal
            open={this.state.modalOpen}
            onClose={() => this.handleClose()}
            dimmer="blurring"
          >
            <Modal.Header>
              <div className="modalHeader">
                <div>
                  {Title}
                </div>
                <div>
                  {showCategories()}
                </div>
              </div>
            </Modal.Header>
            <Modal.Content image className="modalContentImage">
              <Image wrapped size="medium" className="modalGameImage" src={gameImage} />
              <Modal.Description className="modalDescription">
                <Header className="modalDescriptionHeader zeroMargin">
                  {Excerpt}
                </Header>
                <div>
                  <p className="zeroMargin">Released: {datePublished.toString()}</p>
                  <Icon className="external alternate" />
                  <a href={nintendoOfficialUrl} target="_blank">Link to Official Site </a>
                </div>
                <div>
                  <a href={Metacritic.link} target="_blank">Metacritic Score: </a>
                  <MetacriticBadge display="gameCardModal" metaInfo={Metacritic} />
                </div>
                {showCheapList()}
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    );
  }
}

// export default GameCard;
