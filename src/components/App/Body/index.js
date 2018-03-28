import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import FlagIcon from '../FlagIcon';
import GameInfo from './gameInfo';
import GameCard from './GameCard';

export default class Body extends Component {
  // componentDidMount() {
  //   console.log(this, 'body');
  // }

  renderGameList() {
    return (
      <div className="gameList">
        {this.props.switchGames.map((game) => {
          const getNsuid = () => {
            let nsuid = game.Nsuid[2];
            if (!game.Nsuid[2]) {
              nsuid = game.Nsuid;
            }
            return nsuid;
          };
          return (
            <GameCard game={game} key={getNsuid()} />
          );
        })}
      </div>
    );
  }
  // <GameInfo game={game} />

  render() {
    return (
      <div>
        { this.renderGameList() }
      </div>
    );
  }
}
