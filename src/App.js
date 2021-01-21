import React, { useContext } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import Login from "./components/Login/index";
import User from "./components/User/index";
import { UserContext } from "./UserContext";
import "./App.css";

const App = () => {
  const context = useContext(UserContext);
  const location = useLocation();

  const route = () => {
    const path = location.pathname;
    if (!context.token) return <Redirect to="/login" />;
    else if (path === "/login" && context.token) return <Redirect to="/" />;
  };

  return (
    <main className="main">
      {route()}
      <Switch>
        <Route path="/" component={User} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
};

export default App;
