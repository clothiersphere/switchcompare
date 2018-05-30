import * as actionTypes from '../constants/actionTypes';

export function filterGenre(term) {
  return {
    type: actionTypes.FILTER_GENRE,
    term,
  };
}
