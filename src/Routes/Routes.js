import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Portfolio from '../pages/Portfolio';
import Profile from '../pages/Profile';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={['/profile', '/']} render={(props) => <Profile {...props} />} />
        <Route exact path={'/portfolio'} render={(props) => <Portfolio {...props} />} />
      </Switch>
    </div>
  );
};

export default Routes;
