import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
  </Router>,
  document.getElementById('root')
);