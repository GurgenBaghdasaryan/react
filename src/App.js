import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/index";
import User from "./components/User/index";
import { UserContext } from "./UserContext";
import "./App.css";

const App = () => {
  const context = useContext(UserContext);

  const GetRoute = () => {
    if (context.token) {
      return (
        <>
          <Route path="/" component={User} exact />
          <Redirect path="*" to="/" />
        </>
      );
    } else {
      return (
        <>
          <Route path="/login" component={Login} />
          <Redirect path="*" to="/login" />
        </>
      );
    }
  };

  return (
    <main className="main">
      <Switch>
        <GetRoute />
      </Switch>
    </main>
  );
};

export default App;
