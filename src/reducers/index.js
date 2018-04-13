import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import switchGames from './getSwitchGames';
import searchTerm from './searchTerm';
import displayOptions from './displayOptions';

export default combineReducers({
  switchGames,
  displayOptions,
  searchTerm,
  routing: routerReducer,
});
