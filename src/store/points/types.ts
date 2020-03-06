export const ADD_POINT = "ADD_POINT";

export interface Point {
  x: number;
  y: number;
  z: number;
  surface: string;
}

export interface PointsState {
  points: Point[];
}

interface AddPointAction {
  type: typeof ADD_POINT;
  payload: Point;
}

export type PointsActionTypes = AddPointAction;
