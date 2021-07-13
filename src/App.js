import React from 'react';
import Routes from './Routes/Routes';
import AppHeader from './components/AppHeader';
import './resources/scss/index.scss';

const App = () => {
  return (
    <>
      <AppHeader />
      <Routes />
    </>
  );
};

export default App;
