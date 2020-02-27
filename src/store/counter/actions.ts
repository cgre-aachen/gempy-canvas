import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./types";

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrementCount() {
  return {
    type: DECREMENT_COUNTER
  };
}
