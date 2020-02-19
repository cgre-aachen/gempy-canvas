export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface CounterState {
  counter: number;
}

interface IncrementCounter {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementCounter {
  type: typeof DECREMENT_COUNTER;
}

export type CounterActionTypes = IncrementCounter | DecrementCounter;
