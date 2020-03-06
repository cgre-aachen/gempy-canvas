import { WindowSize, UPDATE_WINDOWSIZE } from "./types";

export function updateWindowSize(newWindowSize: WindowSize) {
  return {
    type: UPDATE_WINDOWSIZE,
    payload: newWindowSize
  };
}
