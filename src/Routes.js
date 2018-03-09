import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Blog from "./containers/Blog";
import BlogImageGallery from "./containers/BlogImageGallery";

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} />
    <AppliedRoute path="/blogs/:id" exact component={Blog} props={childProps} />
    <AppliedRoute path="/blogs/gallery/:id" exact component={BlogImageGallery} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
