const initialState = {
  isloggedin: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "switch": {
      return {
        ...state,
        isloggedin: !state.isloggedin,
      };
    }
    case "true": {
      return {
        ...state,
        isloggedin: true,
      };
    }
    case "false": {
      return {
        ...state,
        isloggedin: false,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
