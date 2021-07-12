import React from 'react';
import Routes from './Routes/Routes';
import AppHeader from './components/AppHeader';
import './resources/scss/index.scss';

const App = () => {
  return (
    <div>
      <AppHeader />
      <Routes />
    </div>
  );
};

export default App;
