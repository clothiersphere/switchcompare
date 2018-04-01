import React, { Component } from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';
import PriceCard from './PriceCard';
import MetacriticBadge from './MetacriticBadge';

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
      // } = game;
    } = this.props.game;

    const handleKeyDown = (ev) => {
      if (ev.keyCode === 13) {
        this.handleClick();
      }
    };

    const showCategories = () => {
      let result;
      Categories.forEach(category => result += category);
      return result;
    };

    const gameImage = this.props.game.Image;
    const gameIndex = this.props.index;

    return (
      <div>
        <div
          className="gameCard"
          tabIndex={gameIndex}
          onKeyDown={() => handleKeyDown}
        // onClick={() => setSwitchGame(game)}
          onClick={() => this.handleClick()}
          role="button"
        >
          <Image className="align-self gameImage" src={gameImage} size="medium" />
          <div className="publisherDateCard">
            {Published}
            <MetacriticBadge metaInfo={Metacritic} />
          </div>
          <PriceCard prices={Prices} regions={RegionsSortedByPrice} metaInfo={Metacritic} />
        </div>
        <div>
          <Modal
            open={this.state.modalOpen}
            onClose={() => this.handleClose()}
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
                <p>{showCategories()}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    );
  }
}

// export default GameCard;
