import React from "react";
import "./App.css";
import { ExampleHooks } from "./ExampleHooks";
import { SketchBoard } from "./SketchBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Gempy-Canvas</p>
        <ExampleHooks />
        <SketchBoard />
      </header>
    </div>
  );
}

export default App;
