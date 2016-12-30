'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


// Pages
import Index from 'pages/Index';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={ Index }/>
      <Route path="home" component={ Index }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
