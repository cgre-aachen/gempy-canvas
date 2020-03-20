import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Stage, Layer, Rect } from "react-konva";

/* Sketchboard component;
 * Wraps Canvas and Canvas-Sidepanel components;
 * Google maps component;
 */

export default function SketchBoard() {
  const sketchboardSizeState = (state: RootState) =>
    state.gpmodConfig.sketchboardSize;
  const sketchboardSize = useSelector(sketchboardSizeState);

  return (
    <Stage width={sketchboardSize.width} height={sketchboardSize.height}>
      <Layer>
        <Rect
          width={sketchboardSize.width}
          height={sketchboardSize.height}
          fill="rgb(51,51,51)"
        />
      </Layer>
    </Stage>
  );
}
