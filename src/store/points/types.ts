export interface Point {
  x: number;
  y: number;
  z: number;
  surface: string;
}

export interface PointsState {
  points: Point[];
}

export const ADD_POINT = "ADD_POINT";

interface AddPointAction {
  type: typeof ADD_POINT;
  payload: Point;
}

export type PointsActionTypes = AddPointAction;
