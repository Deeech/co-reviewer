'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// React/Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Components
import Navigation from './components/Navigation'

// Pages
import Index from './pages/Index';
import Text from './pages/Text';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ Navigation }>
        <IndexRoute component={ Text }/>
        <Route path="index" component={ Index }/>
        <Route path="text" component={ Text }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
