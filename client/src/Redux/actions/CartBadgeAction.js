export const increment = () => {
  return {
    type: "increase",
  };
};

export const decrement = () => {
  return {
    type: "decrease",
  };
};

export const zero = () => {
  return {
    type: "zero",
  };
};
export const set = (value) => {
  return {
    type: "set",
    payload: value,
  };
};
// export const incrementOrder = () => {
//   return {
//     type: "increaseorder",
//   };
// };

// export const decrementOrder = () => {
//   return {
//     type: "decreaseorder",
//   };
// };

// export const zeroOrder = () => {
//   return {
//     type: "zeroorder",
//   };
// };
// export const setOrder = (value) => {
//   return {
//     type: "setorder",
//     payload: value,
//   };
// };
