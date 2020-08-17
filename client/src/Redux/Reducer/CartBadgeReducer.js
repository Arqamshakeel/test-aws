const initialState = {
  counter: 0,
  isLogged: true,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case "decrease": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    case "zero": {
      return {
        ...state,
        counter: 0,
      };
    }
    case "set": {
      return {
        ...state,
        counter: action.payload,
      };
    }
    default:
      return state;
  }
};

export default CounterReducer;
