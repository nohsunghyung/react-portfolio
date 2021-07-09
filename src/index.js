import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import AppHistory from './utils/AppHistory';

ReactDOM.render(
  <HashRouter history={AppHistory}>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
