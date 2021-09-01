const INITIAL_STATE = {
  firstName: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
