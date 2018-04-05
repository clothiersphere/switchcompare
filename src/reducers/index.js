import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import switchGames from './getSwitchGames';
import selectedGame from './setSwitchGame';
import gamesDisplayOptions from './gamesDisplayOptions';

export default combineReducers({
  switchGames,
  selectedGame,
  gamesDisplayOptions,
  routing: routerReducer,
});
