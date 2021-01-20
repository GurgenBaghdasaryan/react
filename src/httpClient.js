import axios from "axios";

axios.defaults.headers.common = {
  Authorization: `${localStorage.getItem("acces_token")}`,
};
export default axios;
