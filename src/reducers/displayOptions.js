import * as actionTypes from '../constants/actionTypes';

const initialState = {
  showSales: false,
  sidebarOpen: false,
  listView: false,
  showAllGames: false,
  showHome: true,
  release: { enabled: false },
  price: { enabled: false },
  score: { enabled: false },
  sale: { enabled: false },
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
        showHome: false,
      };
    case actionTypes.SHOW_ALL_GAMES:
      return {
        ...state,
        showSales: false,
        showAllGames: true,
        showHome: false,
      };
    case actionTypes.SHOW_HOME:
      return {
        ...state,
        showSales: false,
        showAllGames: false,
        showHome: true,
      };
    case actionTypes.SORT_BY_RELEASE:
      return {
        ...state,
        release: { enabled: !initialState.release.enabled },
      };
    case actionTypes.SORT_BY_PRICE:
      return {
        ...state,
        release: { enabled: !initialState.price.enabled },
      };
    case actionTypes.SORT_BY_SCORE:
      return {
        ...state,
        release: { enabled: !initialState.score.enabled },
      };
    case actionTypes.SORT_BY_SALE_PERCENTAGE:
      return {
        ...state,
        release: { enabled: !initialState.sale.enabled },
      };

    default:
      return state;
  }
}
