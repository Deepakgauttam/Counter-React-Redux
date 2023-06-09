import { ADD_COUNTER, DEC_COUNTER, RESET_COUNTER } from "./actions.types";

let count = 0;

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
    count: ++count
  };
};

export const decCounter = () => {
  return {
    type: DEC_COUNTER,
    count: --count
  };
};

export const resetCounter = () => {
  count = 0;
  return {
    type: RESET_COUNTER,
    count: 0
  };
};
