export const incrementOrder = () => {
  return {
    type: "increaseorder",
  };
};

export const decrementOrder = () => {
  return {
    type: "decreaseorder",
  };
};

export const zeroOrder = () => {
  return {
    type: "zeroorder",
  };
};
export const setOrder = (value) => {
  return {
    type: "setorder",
    payload: value,
  };
};
