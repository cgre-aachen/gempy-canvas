import React, { useState, useEffect } from "react";

/* Sketchboard component;
 * Wraps Canvas and Canvas-Sidepanel components;
 * Google maps component;
 */

export function SketchBoard() {
  // keep current window width in local state;
  const [width, setWidth] = useState(window.innerWidth);

  // Use a side effect to set that state when window resizes;
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="SketchBoard">
      <p>Sketchboard</p>
      <p>Window width is: {width}</p>
    </div>
  );
}
