import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setToken } from "./store/actions";
import Login from "./components/Login/index";
import User from "./components/User/index";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = localStorage.getItem("access_token");
    dispatch(setToken(getToken));
  }, []);

  const GetRoute = () => {
    const token = useSelector((state) => state.auth.token);
    
    if (token) {
      return (
        <>
          <Route path="/user" component={User} exact />
          <Redirect path="*" to="/user" />
        </>
      );
    } else {
      return (
        <>
          <Route path="/login" component={Login} exact/>
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
