import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import LoginContent from "./LoginContent";
import { UserContext } from "../../UserContext";
import { StyledLoginPage, StyledHeading, StyledParagraph } from "./styles";

const Login = () => {
  const [loginField, setLoginField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const { setToken } = useContext(UserContext);

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
        setToken(result.data.access_token);
        history.push("/");
      });
  };

  return (
    <StyledLoginPage>
      <div>
        <StyledHeading>LOGIN</StyledHeading>
        <LoginContent loginEvent={logIn} values={values} />
        <StyledParagraph>Reset Your Password</StyledParagraph>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
