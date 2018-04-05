import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showSales: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_GAME_SALES:
      return {
        ...state,
        showSales: true,
      };
    case actionTypes.SHOW_ALL_GAMES:
      return {
        ...state,
        showSales: false,
      };
    default:
      return state;
  }
}
