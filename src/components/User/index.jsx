import React,{useContext} from "react";
import { StyledButton } from "./styles";
import { useHistory } from "react-router-dom";
 import {UserContext} from "../../UserContext";

const User = () => {
  const {login , password } = useContext(UserContext);

  const history = useHistory();

  const logIn = () => {    
    history.push('/')
  };

  return (
    <>
      <p>{login}</p>
      <p>{password}</p>

      <StyledButton type="checkbox" onClick={logIn}>Log Out</StyledButton>
    </>
  );
};

export default User;
