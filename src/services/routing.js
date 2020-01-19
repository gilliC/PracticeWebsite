import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withCookies } from "react-cookie";

import { Home } from "../screens/Home";
import { Bookmark } from "../screens/Bookmark";
import Dashboard from "../screens/Dashboard/Dashboard";
import Pomodoro from "../screens/Pomodoro/Pomodoro";
import ColorsConverter from "../screens/ColorsConverter/ColorsConverter";

const routing = props => {
  let { location } = props.history;
  return (
    <Switch {...location}>
      <Route
        exact
        path="/"
        children={({ match, ...rest }) => <Home {...rest} />}
      />
      <Route
        exact
        path="/bookmark"
        children={({ match, ...rest }) => <Bookmark {...rest} />}
      />

      <Route
        exact
        path="/dashboard"
        children={({ match, ...rest }) => (
          <Dashboard {...rest} cookies={props.cookies} />
        )}
      />
      <Route
        exact
        path="/pomodoro"
        children={({ match, ...rest }) => <Pomodoro {...rest} />}
      />
      <Route
        exact
        path="/colorsconverter"
        children={({ match, ...rest }) => <ColorsConverter {...rest} />}
      />
    </Switch>
  );
};

const withrouter = withRouter(routing);
export default withCookies(withrouter);
