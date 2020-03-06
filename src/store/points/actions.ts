import { Point, ADD_POINT } from "./types";

export function addPoint(newPoint: Point) {
  return {
    type: ADD_POINT,
    payload: newPoint
  };
}
