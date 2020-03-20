export const UPDATE_WINDOWSIZE = "UPDATE_WINDOWSIZE";

// Types within the GpmodConfigState;
export interface SizeInPx {
  width: number;
  height: number;
}

// GpmodConfigState
export interface GpmodConfigState {
  windowSize: SizeInPx;
  sketchboardSize: SizeInPx;
}

// Action on the GpmodConfigState;
interface UpdateWindowSizeAction {
  type: typeof UPDATE_WINDOWSIZE;
  payload: SizeInPx;
}

export type GpmodConfigActionTypes = UpdateWindowSizeAction;
