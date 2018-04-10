import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import switchGames from './getSwitchGames';
import searchTerm from './searchTerm';
import gamesDisplayOptions from './gamesDisplayOptions';

export default combineReducers({
  switchGames,
  gamesDisplayOptions,
  searchTerm,
  routing: routerReducer,
});
