import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LoginField from "../LoginField";
import axios from "axios";
import { StyledLoginPage, StyledHeading, StyledParagraph } from "./styles";

const Login = () => {
  const [loginField, setLoginField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const values = {
    setLoginField,
    setPasswordField,
  };

  const history = useHistory();
  const logIn = () => {
    axios
      .post("https://volatile-admin-api.herokuapp.com/auth/login", {
        username: loginField,
        password: passwordField,
      })
      .then((result) => {
        localStorage.setItem("access_token", result.data.access_token);
        history.push("/");
      })
      .catch((err) => history.push("/login"));
  };

  return (
    <StyledLoginPage>
      <div>
        <StyledHeading>LOGIN</StyledHeading>
        <LoginField loginEvent={logIn} values={values} />
        <StyledParagraph>Reset Your Password</StyledParagraph>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
