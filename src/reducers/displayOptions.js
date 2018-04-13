import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showOnSale: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SHOW_ON_SALE:
      return {
        ...state,
        showOnSale: true,
      };
    case actionTypes.SHOW_ALL_GAMES:
      return {
        ...state,
        showOnSale: false,
      };
    default:
      return state;
  }
}
