import React, { Component } from 'react';
// import GameInfo from './gameInfo';
import GameCard from './GameCard';

export default class Body extends Component {
  // componentDidMount() {
  //   console.log(this, 'body');
  // }

  renderGameList() {
    return (
      <div className="gameList">
        {this.props.switchGames.map((game, i) => {
          const getNsuid = () => {
            let nsuid = game.Nsuid[2];
            if (!game.Nsuid[2]) {
              nsuid = game.Nsuid;
            }
            return nsuid;
          };
          return (
            <GameCard
              game={game}
              index={i}
              key={getNsuid()}
              setSwitchGame={this.props.setSwitchGame}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="body">
        <ul className="gameList">
          { this.renderGameList() }
        </ul>
      </div>
    );
  }
}
