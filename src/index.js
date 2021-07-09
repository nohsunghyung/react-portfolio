import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import AppHistory from './utils/AppHistory';

ReactDOM.render(
  <Router history={AppHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);
