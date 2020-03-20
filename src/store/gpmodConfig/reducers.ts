import {
  GpmodConfigState,
  UPDATE_WINDOWSIZE,
  GpmodConfigActionTypes
} from "./types";

const initialState: GpmodConfigState = {
  windowSize: { width: 0, height: 0 },
  sketchboardSize: { width: 0, height: 0 }
};

export function gpmodConfigReducers(
  state = initialState,
  action: GpmodConfigActionTypes
): GpmodConfigState {
  switch (action.type) {
    case UPDATE_WINDOWSIZE:
      const { width, height } = action.payload;
      return {
        ...state,
        windowSize: { width, height },
        sketchboardSize: {
          width: width - 250,
          height: height - 90
        }
      };
    default:
      return state;
  }
}
