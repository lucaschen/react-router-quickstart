import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import About from "./About";
import Home from "./Home";

const Root = () => {
  return (
    <div>
      <strong>THIS IS THE ROOT COMPONENT</strong>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Home} path="/" />
      </Switch>
    </div>
  );
};

export default Root;
