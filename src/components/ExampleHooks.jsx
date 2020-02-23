import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPoint } from "../store/points/actions";

export const ExampleHooks = () => {
  const points = useSelector(state => state.points);
  console.log(points);

  const dispatch = useDispatch();
  const newPoint = {
    x: 21,
    y: 21,
    z: 21,
    surface: "Surf0"
  };

  return (
    <div>
      <p>Hello Hooks</p>
      <button onClick={() => dispatch(addPoint(newPoint))}>Add point</button>
    </div>
  );
};
