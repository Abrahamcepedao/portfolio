import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
