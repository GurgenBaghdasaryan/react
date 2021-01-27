import React from "react";
import Button from "../../shared/Button/index";
import { useSelector } from "react-redux";
import { StyledInput, StyledParagraph, StyledH } from "./styles";

const LoginContent = ({
  loginEvent,
  errors,
  loginField,
  passwordField,
  setLoginField,
  setPasswordField,
}) => {
  const { error, setError } = errors;
  const token = useSelector((state) => state.token);

  const check = () => {
    if (!loginField || !passwordField || !token) {
      setError(true);
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
      {error && <StyledH>Invalid username/password</StyledH>}
      <br />
      <Button clickEvent={loginEvent} check={check}>
        Login
      </Button>
      <br />
    </>
  );
};

export default LoginContent;
