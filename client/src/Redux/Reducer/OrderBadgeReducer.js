const initialState = {
  order: 0,
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increaseorder": {
      return {
        ...state,
        order: state.order + 1,
      };
    }

    case "decreaseorder": {
      return {
        ...state,
        order: state.order - 1,
      };
    }

    case "zeroorder": {
      return {
        ...state,
        order: 0,
      };
    }
    case "setorder": {
      return {
        ...state,
        order: action.payload,
      };
    }
    default:
      return state;
  }
};

export default OrderReducer;
