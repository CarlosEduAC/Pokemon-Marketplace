import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Store from '../pages/Store';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/:type" component={Store} />
  </Switch>
);

export default Routes;
