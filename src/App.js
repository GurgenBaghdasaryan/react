import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import User from "./components/User/index";
import "./App.css";

const App = () => {
  return (
    <main className='main'>
      <Switch>
        <Route path="/" component={User} exact />
        <Route path="/Login" component={Login} />
      </Switch>
    </main>
  );
};

export default App;
