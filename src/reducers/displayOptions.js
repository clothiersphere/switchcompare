import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showSales: false,
  sidebarOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    case actionTypes.SHOW_ON_SALE:
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
