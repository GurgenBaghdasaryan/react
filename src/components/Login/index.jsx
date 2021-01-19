import React, { useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import LoginField from "../LoginField";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { StyledLoginPage, StyledHeading, StyledParagraph } from "./styles";


const Login = () => {
  const { loginField, passwordField, login, password } = useContext(
    UserContext
  );

  const history = useHistory();
  const logIn = () => {
    if (!loginField.trim() || !passwordField.trim()) return;
    if (login !== loginField && passwordField !== password) return;
  
    axios
      .post("https://volatile-admin-api.herokuapp.com/auth/login", {
        username: login,
        password: password,
      })
      .then((result) => {
        localStorage.setItem('access_token', result.data.access_token);
        history.push("/about");
      });
  };

  return (
    <StyledLoginPage>
      <div>
        <StyledHeading>LOGIN</StyledHeading>
        <LoginField loginEvent={logIn} />
        <StyledParagraph>Reset Your Password</StyledParagraph>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
