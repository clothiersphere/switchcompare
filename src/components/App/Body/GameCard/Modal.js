import React, { Component } from 'react';
import { Header, Image, Modal, Icon, Table } from 'semantic-ui-react';

export default class Modal extends Component {
  render() {
    console.log(this.props, 'modal prop');
    const gameImage = this.props.game.Image;
    const nintendoOfficialUrl = `https://www.nintendo.co.uk/${Url}`;
    const datePublished = new Date(Published);

    return (
      <div>
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
