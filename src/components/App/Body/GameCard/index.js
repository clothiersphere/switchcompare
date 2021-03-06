import React, { Component } from 'react';
import { Header, Image, Modal, Icon, Table } from 'semantic-ui-react';
import shortid from 'shortid';
import moment from 'moment';
import countries from 'i18n-iso-countries';
import FlagIcon from '../../FlagIcon';
import PriceCard from './PriceCard';
import SaleCard from './SaleCard';
import MetacriticBadge from './MetacriticBadge';
// import TilePriceCard from './Tile/TilePriceCard';
import missingImage from '../../../../../public/images/missingImage.png';
import GameCardSquare from './Square';
import GameCardTile from './Tile';

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

    const { toggleTileView } = this.props.displayOptions;

    // console.log(this.props, 'GameCard props');

    const handleKeyDown = ev => {
      if (ev.keyCode === 13) {
        this.handleClick();
      }
    };

    const showCategories = () => {
      let result = null;
      if (!Categories) {
        return result;
      }
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
        {RegionsSortedByPrice.map(region => {
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
              <div className="gameCardPriceAmount">${(Prices[region] / 100).toFixed(2)}</div>
            </li>
          );
        })}
      </ul>
    );

    const showCheapList = () => {
      const cheapest = RegionsSortedByPrice.slice(0, 5);
      return (
        <ul className="gameCardPriceList">
          {cheapest.map(region => {
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
                <div className="gameCardPriceAmount">${(Prices[region] / 100).toFixed(2)}</div>
              </li>
            );
          })}
        </ul>
      );
    };

    const lowestPrice = () => {
      let lowestComparedPrice = null;
      let lowestPriceRegion = null;

      lowestComparedPrice = Prices[RegionsSortedByPrice[0]];
      lowestPriceRegion = RegionsSortedByPrice[0];

      if (Object.hasOwnProperty.call(Prices, 'Sale')) {
        if (Prices[RegionsSortedByPrice[0]] > Sale.Prices[Sale.RegionsSortedByPrice[0]].Price) {
          lowestComparedPrice = Sale.Prices[RegionsSortedByPrice[0]].Price;
          lowestPriceRegion = Sale.RegionsSortedByPrice[0];
        } else {
        }
      }
      return (
        <div className="lowestComparedPrice">
          Lowest Price:<FlagIcon className="flagIconSq" code={lowestPriceRegion.toLowerCase()} />
          ${(lowestComparedPrice / 100).toFixed(2)}
        </div>
      );
    };

    const showSaleDate = () => {
      if (Sale.Prices) {
        const saleDate = Sale.Prices[Sale.RegionsSortedByPrice[0]].End;
        const saleEnd = moment(saleDate).format('h:mm a MM/DD/YY');
        return saleEnd;
      }
      return null;
    };

    const gameImage = this.props.game.Image;
    const nintendoOfficialUrl = `https://www.nintendo.co.uk/${Url}`;
    const datePublished = new Date(Published);

    const TilePriceCard = ({ prices, sale, regions }) => (
      <div className="gameCardTilePrices">
        <SaleCard prices={prices} sale={sale} regions={regions} />
      </div>
    );

    const DisplayType = () => {
      if (toggleTileView) {
        return (
          <GameCardTile
            handleKeyDown={handleKeyDown}
            gameImage={gameImage}
            published={Published}
            props={this.props}
          />
        );
      }
      return (
        <GameCardSquare
          handleKeyDown={handleKeyDown}
          gameImage={gameImage}
          published={Published}
          props={this.props}
        />
      );
    };

    return (
      <div onClick={() => this.handleClick()} onKeyDown={() => handleKeyDown} role="button">
        <DisplayType />
        <Modal open={this.state.modalOpen} onClose={() => this.handleClose()} dimmer="blurring">
          <Modal.Header>
            <div className="modalHeader">
              <div>{Title}</div>
              <div>{showCategories()}</div>
            </div>
          </Modal.Header>
          <Modal.Content image className="modalContentImage">
            <Image wrapped size="medium" className="modalGameImage" src={gameImage} />
            <Modal.Description className="modalDescription">
              <Header className="modalDescriptionHeader zeroMargin">{Excerpt}</Header>
              <div>
                <p className="zeroMargin">Released: {datePublished.toString()}</p>
                <Icon className="external alternate" />
                <a href={nintendoOfficialUrl} target="_blank">
                  Link to Official Site{' '}
                </a>
              </div>
              <div>
                <a href={Metacritic.link} target="_blank">
                  Metacritic Score:{' '}
                </a>
                <MetacriticBadge display="gameCardModal" metaInfo={Metacritic} />
              </div>
              {showCheapList()}
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
