import React from "react";
import { StyledInput, StyledParagraph } from "./styles";
import Button from "../Button/index";

const LoginField = ({ loginEvent ,values}) => {

  const {setLoginField,setPasswordField} = values;
  return (
    <>
      <StyledParagraph>Login</StyledParagraph>
      <StyledInput
        onChange={(e) => setLoginField(e.target.value)}
        type="text"
        style={{ fontSize: "20px", textIndent: "5px" }}
      />
      <StyledParagraph>Password</StyledParagraph>
      <StyledInput
        onChange={(e) => setPasswordField(e.target.value)}
        type="password"
        style={{ fontSize: "20px", textIndent: "5px" }}
      />
      <br />

      <Button clickEvent={loginEvent} />
      <br />
    </>
  );
};

export default LoginField;
