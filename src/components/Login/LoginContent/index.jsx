import React, { useContext, useState } from "react";
import Button from "../../shared/Button/index";
import { UserContext } from "../../../UserContext";
import { StyledInput, StyledParagraph } from "./styles";

const LoginContent = ({ loginEvent, values }) => {
  const { loginField, passwordField, setLoginField, setPasswordField } = values;
  const context = useContext(UserContext);
  const { disable, setDisable } = context;

  const check = () => {
    if (!loginField || !passwordField || !context.token) {
      setDisable(true);
    }
  };

  return (
    <>
      <StyledParagraph>Login</StyledParagraph>
      <StyledInput
        onChange={(e) => setLoginField(e.target.value)}
        type="text"
      />
      <StyledParagraph>Password</StyledParagraph>
      <StyledInput
        onChange={(e) => setPasswordField(e.target.value)}
        type="password"
      />
      {disable && <div>Invalid username/password</div>}
      <br />
      <Button clickEvent={loginEvent} check={check} />
      <br />
    </>
  );
};

export default LoginContent;
