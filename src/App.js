import React from "react";
import Header from "./header/header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Tech from "./tech/techs";
import TodoMain from "./todo/todoMain";

const app = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route path="/todo" component={TodoMain}></Route>
        <Route path="/tech" component={Tech}></Route>
        <Redirect from="*" to="/todo"></Redirect>
      </Switch>
    </Router>
  </>
);

export default app;
