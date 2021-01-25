import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../UserContext";
import LoginContent from "./LoginContent";
import { StyledLoginPage, StyledHeading, StyledParagraph } from "./styles";

const Login = () => {
  const [loginField, setLoginField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [error, setError] = useState(false);
  const { setToken } = useContext(UserContext);

  const errors = {
    error,
    setError,
  };

  const values = {
    loginField,
    passwordField,
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
      })
      .catch((e) => setError(true));
  };

  return (
    <StyledLoginPage>
      <div>
        <StyledHeading>LOGIN</StyledHeading>
        <LoginContent loginEvent={logIn} values={values} errors={errors} />
        <StyledParagraph>Reset Your Password</StyledParagraph>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
