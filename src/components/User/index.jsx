import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setToken } from "../../store/actions";
import DataList from "./DataList";
import { StyledButton } from "./styles";

const User = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = localStorage.getItem("access_token");
    axios
      .get("https://volatile-admin-api.herokuapp.com/employee", {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const logOut = () => {
    localStorage.removeItem("access_token");
    dispatch(setToken(""));
    history.push("/login");
  };

  return (
    <>
      <DataList data={data} />
      <StyledButton onClick={logOut}>Log Out</StyledButton>
    </>
  );
};

export default User;
