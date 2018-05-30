import * as actionTypes from '../constants/actionTypes';

// const initialState = {
//   action: false,
//   shooter: false,
//   adventure: false,
//   platformrer: false,
//   arcade: false,
//   fps: false,
//   fighting: false,
//   party: false,
//   puzzle: false,
//   sports: false,
//   simulation: false,
//   music: false,
//   strategy: false,
//   rpg: false,
//   boardgame: false,
//   racing: false,
//   other: false,
//   communication: false,
//   education: false,
//   golf: false,
//   football: false,
//   basketball: false,
//   cooking: false,
//   lifestyle: false,
//   utility: false,
//   genre: [],
// };
const initialState = [];

function filterGenre(state, action) {
  const { term } = action;
  console.log(term, 'term');
  return [...state, ...term];
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.FILTER_GENRE:
      return filterGenre(newState, action);
    default:
      return state;
  }
}
