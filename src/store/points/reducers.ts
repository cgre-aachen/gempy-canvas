import { PointsState, ADD_POINT, PointsActionTypes } from "./types";

const initialState: PointsState = {
  points: []
};

export function pointsReducer(
  state = initialState,
  action: PointsActionTypes
): PointsState {
  switch (action.type) {
    case ADD_POINT:
      return {
        points: [...state.points, action.payload]
      };
    default:
      return state;
  }
}
