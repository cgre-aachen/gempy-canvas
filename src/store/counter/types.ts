export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface CounterState {
  counter: number;
}

interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER;
}

export type CounterActionTypes =
  | IncrementCounterAction
  | DecrementCounterAction;
