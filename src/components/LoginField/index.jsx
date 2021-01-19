import React, { useContext, useCallback } from "react";
import { UserContext } from "../../UserContext";
import { StyledInput, StyledParagraph } from "./styles";
import Button from "../Button/index";

const LoginField = ({ loginEvent }) => {
  const { setPasswordField, setLoginField } = useContext(UserContext);

  // const check = () =>{
  //   if(! && !){
  //     return <p>Incorrect username or password</p>;
  //   }
  // }

 
  return (
    <>
      <StyledParagraph>Login</StyledParagraph>
      <StyledInput
        onChange={(e) => setLoginField(e.target.value)}
        type="text"
        style={{ fontSize: "20px", textIndent: "5px" }}
      />
      <StyledParagraph>Password</StyledParagraph>
       {/* <p>{check()}</p>  */}
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
