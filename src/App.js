import React from "react";
import "./App.css";
import Login from "./components/Login/index";
import User from "./components/User/index";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <main className='main'>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/about" component={User} />
      </Switch>
    </main>
  );
};

export default App;
