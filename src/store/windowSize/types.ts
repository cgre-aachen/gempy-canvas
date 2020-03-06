export const UPDATE_WINDOWSIZE = "UPDATE_WINDOWSIZE";

export interface WindowSize {
  width: number;
  height: number;
}

export interface WindowSizeState {
  size: WindowSize;
}

interface UpdateWindowSizeAction {
  type: typeof UPDATE_WINDOWSIZE;
  payload: WindowSize;
}

export type WindowSizeActionTypes = UpdateWindowSizeAction;
