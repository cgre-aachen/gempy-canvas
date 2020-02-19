// src/store/index.ts
import { Action, Reducer, createStore } from "redux";

// Interface (Type) for initial state.
export interface InitialState {
  globalCounter: number;
}

// Set initial state values.
export const initialState: InitialState = {
  globalCounter: 0
};

//
export interface DispatchAction extends Action {
  payload: Partial<InitialState>;
}

//
const rootReducer: Reducer<InitialState, DispatchAction> = (state, action) => {
  return initialState;
};

// store
export const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer
);
