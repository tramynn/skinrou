import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding/GuestLanding";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Routines from "./Components/Routines/Routines";
import CreateRoutine from "./Components/CreateRoutine/CreateRoutine";
import UserSettings from "./Components/UserSettings/UserSettings";
import UserProfile from "./Components/UserProfile/UserProfile";
import Chatrooms from "./Components/Chatrooms/Chatrooms";
import AgeRoutines from "./Components/AgeRoutines/AgeRoutines";
import SkintypeRoutines from "./Components/SkintypeRoutines/SkintypeRoutines";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
    <Route component={Routines} path="/routines/:categoryId" />
    <Route component={AgeRoutines} path="/routines/age/:age" />
    <Route component={SkintypeRoutines} path="/routines/skintype/:type" />
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
