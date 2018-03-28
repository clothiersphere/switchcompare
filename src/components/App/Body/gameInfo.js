import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const GameInfo = ({ game }) => {
  const {
    Categories,
    Excerpt,
    Metacritic,
    Prices,
    Published,
    RegionsSortedByPrice,
    Title,
    Url,
  } = game;

  console.log(Metacritic.metascore, 'mc');

  const showMetacritic = (game) => {
    if (Metacritic.metascore) {
      return (<p> Metacritic.metascore </p>);
    }
    return null;
  };

  // if (game.hasOwnProperty('Sale')) {
  if (game.Sale) {
    // const { Sale } = game;
    console.log('we got a sale');
  }

  return (
    <Modal trigger={<Button>+</Button>}>
      <Modal.Header>{Title}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={game.Image} />
        <Modal.Description>
          <Header>{Excerpt}</Header>
          <p>{Categories}</p>
          {showMetacritic(Metacritic)}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default GameInfo;
