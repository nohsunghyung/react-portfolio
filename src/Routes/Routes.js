import React from 'react';
import { Route } from 'react-router-dom';
import Portfolio from '../pages/Portfolio';
import Profile from '../pages/Profile';

const Routes = () => {
  return (
    <div>
      <Route
        exact
        path={['/', 'profile']}
        render={(props) => <Profile {...props} />}
      />
      <Route
        exact
        path={'/portfolio'}
        render={(props) => <Portfolio {...props} />}
      />
    </div>
  );
};

export default Routes;
