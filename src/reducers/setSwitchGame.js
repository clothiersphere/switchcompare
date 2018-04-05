import * as actionTypes from '../constants/actionTypes';

const initialState = {};

function setSwitchGame(state, action) {
  const { game } = action;
  return [...state, { game }];
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.SET_GAME:
      return setSwitchGame(newState, action);
    default:
      return state;
  }
}
