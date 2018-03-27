import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function getSwitchGames(state, action) {
  const { results } = action;
  return [...state, ...results];
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.GET_GAMES:
      return getSwitchGames(newState, action);
    default:
      return state;
  }
}
