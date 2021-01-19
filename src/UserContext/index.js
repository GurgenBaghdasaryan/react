import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(getToken);
  const getToken = localStorage.getItem("access_token");


  const values = {
    token,
    setToken,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
