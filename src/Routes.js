import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout } from "./layouts";

import { Dashboard as DashboardView } from "./views";
import { Events as EventsView } from "./views";
import { Login as LoginView } from "./views";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginView} />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={EventsView}
        exact
        layout={MainLayout}
        path="/events"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
