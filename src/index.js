import React from 'react';
import { Route}
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
// import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './stores/configureStore';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history} children={Routes} >
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(require('./components/App').default);
  });
}

