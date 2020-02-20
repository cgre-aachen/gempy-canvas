import {
  CounterState,
  CounterActionTypes,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from "./types";

const initialState: CounterState = {
  counter: 0
};

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1
      };
    case DECREMENT_COUNTER:
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
