import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PrivateRoute from "./configs/PrivateRoute";
import Home from "./views/pages/Home";
import Register from "./views/pages/Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Register} path="/register" exact />
      </Switch>
    </Router>
  );
};

export default App;
