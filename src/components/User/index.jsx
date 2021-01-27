import React, { useEffect, useState } from "react";
import axios from "axios";
import DataList from "./DataList";
import { setToken } from "../../store/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { StyledButton } from "./styles";

const User = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const getToken = localStorage.getItem("access_token");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://volatile-admin-api.herokuapp.com/employee", {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      .then((res) => {
        setData(res.data);
        history.push("/user");
      });
  }, [getToken]);

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
