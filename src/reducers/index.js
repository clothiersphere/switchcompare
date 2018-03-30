import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import switchGames from './getSwitchGames';
import selectedGame from './setSwitchGame';

export default combineReducers({
  switchGames,
  selectedGame,
  routing: routerReducer,
});
