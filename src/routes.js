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
import EditRoutine from "./Components/EditRoutine/EditRoutine";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={Register} path="/register" />
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
    <Route component={AgeRoutines} exact path="/routines/age/:age" />
    <Route component={SkintypeRoutines} exact path="/routines/skintype/:type" />
    <Route component={Routines} exact path="/routines/:categoryId" />
    <Route component={CreateRoutine} path="/createRoutine" />
    <Route component={EditRoutine} exact path="/editRoutine/:routineId" />
    <Route component={UserSettings} path="/settings" />
    <Route component={UserProfile} path="/profile/user/:userId" />
    <Route component={Chatrooms} path="/chatrooms" />
    <Route
      render={() => {
        return <h1>404 Page Not Found.</h1>;
      }}
    />
  </Switch>
);
