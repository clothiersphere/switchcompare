import * as actionTypes from '../constants/actionTypes';

export function searchGames(term) {
  return {
    type: actionTypes.SEARCH_GAMES,
    term,
  };
}
