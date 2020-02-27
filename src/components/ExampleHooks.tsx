import React from "react";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { addPoint } from "../store/points/actions";
import { Point } from "../store/points/types";
import { incrementCounter, decrementCount } from "../store/counter/actions";
import { CounterState } from "../store/counter/types";

export const ExampleHooks = () => {
  const pointsState = (state: RootState) => state.points;
  const points = useSelector(pointsState);

  const counterState = (state: CounterState) => state.counter;
  const counter = useSelector(counterState);

  console.log(points);
  console.log(counter);

  const dispatch = useDispatch();
  const newPoint: Point = {
    x: 21,
    y: 21,
    z: 21,
    surface: "Surf0"
  };

  return (
    <div>
      <p>Hello Hooks</p>
      <button onClick={() => dispatch(addPoint(newPoint))}>Add point</button>
      <button onClick={() => dispatch(incrementCounter())}> Increment </button>
      <button onClick={() => dispatch(decrementCount())}> Decrement </button>
    </div>
  );
};
