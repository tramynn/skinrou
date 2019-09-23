import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding/GuestLanding";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
    <Route
      render={() => {
        return <h1>404 Not Found.</h1>;
      }}
    />
  </Switch>
);
