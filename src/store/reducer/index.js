const INITIAL_STATE = {
  token: "",
  auth: false,
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
        auth: action.payload ? true : false,
      };
    default:
      return state;
  }
};

export default tokenReducer;
