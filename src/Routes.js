import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Blog from "./containers/Blog";

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} />
    <AppliedRoute path="/blogs/:id" exact component={Blog} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
