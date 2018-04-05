import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export default class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  // handleOpen = () => this.setState({ modalOpen: true })
  // handleClose = () => this.setState({ modalOpen: false })

  render() {
    const game = this.props.switchGames.filter(game => game.GameCode === this.props.match.params.gameCode);
    const {
      Categories,
      Excerpt,
      Metacritic,
      Prices,
      Published,
      RegionsSortedByPrice,
      Title,
      Url,
    } = game[0];

    const showMetacritic = () => {
      if (Metacritic.metascore) {
        return (<p> Metacritic.metascore </p>);
      }
      return null;
    };

    const showPrices = () => {
      game.Prices.map(price =>
        <div />);
    };

    // if (game.hasOwnProperty('Sale')) {
    if (game.Sale) {
      // const { Sale } = game;
      console.log('we got a sale');
    }
    // return (
    //   <Modal >
    //     <Modal.Header>{Title}</Modal.Header>
    //     <Modal.Content image>
    //       <Image wrapped size="medium" src={game.Image} />
    //       <Modal.Description>
    //         <Header>{Excerpt}</Header>
    //         <p>{Categories}</p>
    //         {showMetacritic()}
    //       </Modal.Description>
    //     </Modal.Content>
    //   </Modal>
    // );
    return (
      <div>
        {game[0].Title}
      </div>
    );
  }
}
