import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

export default class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

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
    } = this.props.game;

    const showMetacritic = () => {
      if (Metacritic.metascore) {
        return (<p> Metacritic.metascore </p>);
      }
      return null;
    };

    // if (game.hasOwnProperty('Sale')) {
    if (this.props.game.Sale) {
      // const { Sale } = game;
      console.log('we got a sale');
    }
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>+</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>{Title}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={this.props.game.Image} />
          <Modal.Description>
            <Header>{Excerpt}</Header>
            <p>{Categories}</p>
            {showMetacritic()}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
