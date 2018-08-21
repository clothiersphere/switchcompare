import * as actionTypes from '../constants/actionTypes';

const initialState = {
  toggleGridView: true,
  toggleTileView: false,
  showSales: false,
  sidebarOpen: false,
  listView: false,
  showAllGames: false,
  showHome: true,
  release: { enabled: false, ascending: true },
  price: { enabled: false, ascending: true },
  score: { enabled: false, ascending: true },
  sale: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    case actionTypes.TOGGLE_ON_SALE:
      return {
        ...state,
        showSales: !state.showSales,
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
        // release: !state.release,
        release: { enabled: !state.release.enabled },
      };
    case actionTypes.SORT_BY_PRICE:
      return {
        ...state,
        price: { enabled: !state.price.enabled, ascending: true },
      };

    case actionTypes.SORT_BY_SCORE:
      return {
        ...state,
        score: { enabled: !state.score.enabled },
      };
    case actionTypes.SORT_BY_SALE_PERCENTAGE:
      return {
        ...state,
        // sale: { enabled: !state.sale.enabled },
        sale: !state.sale,
      };
    case actionTypes.TOGGLE_GRID_VIEW:
      return {
        ...state,
        toggleGridView: true,
        toggleTileView: false,
      };
    case actionTypes.TOGGLE_TILE_VIEW:
      return {
        ...state,
        toggleGridView: false,
        toggleTileView: true,
      };

    default:
      return state;
  }
}
