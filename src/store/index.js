import { combineReducers } from "redux";
import tokenReducer from "./reducer";

const allReducers = combineReducers({
  auth: tokenReducer,
});

export default allReducers;
