'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Components
import Navigation from './components/Navigation'

// Pages
import Index from './pages/Index';
import Text from './pages/Text';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={ Navigation }>
      <IndexRoute component={ Text }/>
      <Route path="index" component={ Index }/>
      <Route path="text" component={ Text }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
