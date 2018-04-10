import * as actionTypes from '../constants/actionTypes';

const initialState = { term: '' };

function searchTerm(state, action) {
  let { term } = action;
  term = initialState.term + term;
  return { ...state, term };
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.SEARCH_GAMES:
      return searchTerm(newState, action);
    default:
      return state;
  }
}
