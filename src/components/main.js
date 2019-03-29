import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./resume";
import Contacts from "./contacts";
import Projects from "./projects";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </main>
);

export default Main;
