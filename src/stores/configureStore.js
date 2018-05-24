import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';
import { history } from '../utils/history';

const logger = createLogger();
const routersMiddleware = routerMiddleware(history);

// const middlewares = [thunk, logger, routersMiddleware];

const createStoreWithMiddleware = applyMiddleware(thunk, logger, routersMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
