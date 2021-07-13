import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Portfolio from '../pages/Portfolio';
import Profile from '../pages/Profile';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={'/profile'} render={(props) => <Profile {...props} />} />
        <Route exact path={'/portfolio'} render={(props) => <Portfolio {...props} />} />
        <Redirect from="/" to="/profile" />
      </Switch>
    </div>
  );
};

export default Routes;
