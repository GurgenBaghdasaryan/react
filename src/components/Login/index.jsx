import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/actions";
import LoginContent from "./LoginContent";
import { StyledLoginPage, StyledHeading, StyledParagraph } from "./styles";

const Login = () => {
  const [loginField, setLoginField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const errors = {
    error,
    setError,
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
        dispatch(setToken(result.data.access_token));
        history.push("/user");
      })
      .catch((e) => setError(true));
  };

  return (
    <StyledLoginPage>
      <div>
        <StyledHeading>LOGIN</StyledHeading>
        <LoginContent
          loginEvent={logIn}
          errors={errors}
          loginField={loginField}
          passwordField={passwordField}
          setLoginField={setLoginField}
          setPasswordField={setPasswordField}
        />
        <StyledParagraph>Reset Your Password</StyledParagraph>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
