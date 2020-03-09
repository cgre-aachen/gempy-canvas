import { SizeInPx, UPDATE_WINDOWSIZE } from "./types";

export function updateWindowSize(newWindowSize: SizeInPx) {
  return {
    type: UPDATE_WINDOWSIZE,
    payload: newWindowSize
  };
}
