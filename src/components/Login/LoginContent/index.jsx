import React from "react";
import { StyledInput, StyledParagraph } from "./styles";
import Button from "../../shared/Button/index";

const LoginContent = ({ loginEvent, values }) => {
  const { setLoginField, setPasswordField } = values;

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
      <br />

      <Button clickEvent={loginEvent} />
      <br />
    </>
  );
};

export default LoginContent;
