import * as actionTypes from '../constants/actionTypes';

export function setSwitchGame(game) {
  return {
    type: actionTypes.SET_GAME,
    game,
  };
}
