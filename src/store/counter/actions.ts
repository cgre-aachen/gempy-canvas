import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CounterActionTypes
} from "./types";

// TypeScript infers that this function is returning IncrementCounter
export function incrementCounter(): CounterActionTypes {
  return {
    type: INCREMENT_COUNTER
  };
}

// TypeScript infers that this function is returning DecrementCounter
export function idecrementCounter(): CounterActionTypes {
  return {
    type: DECREMENT_COUNTER
  };
}
