import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import switchGames from './getSwitchGames';

export default combineReducers({
  switchGames,
  routing: routerReducer,
});
