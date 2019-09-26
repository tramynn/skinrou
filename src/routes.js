import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding/GuestLanding";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import CreateRoutine from "./Components/CreateRoutine/CreateRoutine";
import UserSettings from "./Components/UserSettings/UserSettings";
import UserProfile from "./Components/UserProfile/UserProfile";
import Chatrooms from "./Components/Chatrooms/Chatrooms";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
    <Route component={CreateRoutine} path="/createRoutine" />
    <Route component={UserSettings} path="/settings" />
    <Route component={UserProfile} path="/profile" />
    <Route component={Chatrooms} path="/chatrooms" />
    <Route
      render={() => {
        return <h1>404 Not Found.</h1>;
      }}
    />
  </Switch>
);