import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login/index";
import User from "./components/User/index";
import { UserContext } from "./UserContext";
import "./App.css";

const App = () => {
  const context = useContext(UserContext);
  return (
    <main className="main">
      <Switch>
        <Route path="/" component={User} exact />
        {context.token ? <Redirect to="/" /> : <Login />}
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
};

export default App;
