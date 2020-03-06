import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Stage, Layer, Rect } from "react-konva";

/* Sketchboard component;
 * Wraps Canvas and Canvas-Sidepanel components;
 * Google maps component;
 */

export default function SketchBoard() {
  const windowSizeState = (state: RootState) => state.windowSize.size;
  const windowSize = useSelector(windowSizeState);

  return (
    <Stage width={windowSize.width - 250} height={windowSize.height - 90}>
      <Layer>
        <Rect
          width={windowSize.width - 250}
          height={windowSize.height - 90}
          fill="rgb(51,51,51)"
        />
      </Layer>
    </Stage>
  );
}
