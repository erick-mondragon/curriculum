import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Experience from "../pages/Experience";
import Education from "../pages/Education";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Profile />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
    </Switch>
  );
}
