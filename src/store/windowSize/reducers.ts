import {
  WindowSizeState,
  UPDATE_WINDOWSIZE,
  WindowSizeActionTypes
} from "./types";

const initialState: WindowSizeState = {
  size: { width: 0, height: 0 }
};

export function windowSizeReducer(
  state = initialState,
  action: WindowSizeActionTypes
): WindowSizeState {
  switch (action.type) {
    case UPDATE_WINDOWSIZE:
      return {
        size: action.payload
      };
    default:
      return state;
  }
}
