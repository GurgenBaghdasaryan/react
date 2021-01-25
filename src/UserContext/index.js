import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const getToken = localStorage.getItem("access_token");
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getToken);
  }, []);

  const values = {
    token,
    setToken,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
