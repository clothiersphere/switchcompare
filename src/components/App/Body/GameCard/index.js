import React, { Component } from 'react';
import { Header, Image, Modal, Icon } from 'semantic-ui-react';
import countries from 'i18n-iso-countries';
import FlagIcon from '../../FlagIcon';
import PriceCard from './PriceCard';
import MetacriticBadge from './MetacriticBadge';

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
  // const GameCard = ({
  //   game, setSwitchGame, index, history,
  // }) => {
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
      // } = game;
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

    const showPrices = () => (
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

    const showSix = () => {
      const sixCheapest = RegionsSortedByPrice.slice(0, 5);
      return (
        <ul className="gameCardPriceList">
          {sixCheapest.map((region) => {
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

    const gameImage = this.props.game.Image;
    const gameIndex = this.props.index;
    const nintendoOfficialUrl = `https://www.nintendo.co.uk/${Url}`;
    const datePublished = new Date(Published);

    return (
      <div>
        <div
          className="gameCard"
          tabIndex={gameIndex}
          onKeyDown={() => handleKeyDown}
          onClick={() => this.handleClick()}
          role="button"
        >
          <Image className="align-self gameImage" src={gameImage} size="medium" />
          <div className="publisherDateCard">
            {Published}
            <MetacriticBadge display="gameCard" metaInfo={Metacritic} />
          </div>
          <PriceCard prices={Prices} regions={RegionsSortedByPrice} metaInfo={Metacritic} />
        </div>
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
            <Modal.Content image>
              <Image wrapped size="medium" src={gameImage} />
              <Modal.Description>
                <Header>{Excerpt}</Header>
                <p>Released: {datePublished.toString()}</p>
                <div>
                  <MetacriticBadge display="gameCardModal" metaInfo={Metacritic} />
                </div>
                <Icon className="external alternate" />
                <a href={nintendoOfficialUrl} > Link to Official Site </a>
                {showSix()}
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    );
  }
}

// export default GameCard;
