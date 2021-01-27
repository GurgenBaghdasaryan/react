import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./components/Login/index";
import User from "./components/User/index";
import { useSelector } from "react-redux";
import "./App.css";
import { setToken } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = localStorage.getItem("access_token");
    dispatch(setToken(getToken));
  }, []);

  const GetRoute = () => {
    const auth = useSelector((state) => state.auth.token);

    if (auth) {
      return (
        <>
          <Route path="/user" component={User} exact />
          <Redirect path="*" to="/user" />
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
