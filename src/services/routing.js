import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
const routing = props => {
  let {location} = props.history;
  return (
    <Switch {...location}>
      <Route
        exact
        path="/"
        children={({match, ...rest}) => <Home {...rest} />}
      />
      <Route
        exact
        path="/dashboard"
        children={({match, ...rest}) => <Dashboard {...rest} />}
      />
    </Switch>
  );
};
export default withRouter(routing);
