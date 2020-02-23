import React from "react";
import "./App.css";
import Example from "./Example";
import { ExampleHooks } from "./ExampleHooks";

function App() {
  console.log("App running ...");
  return (
    <div className="App">
      <header className="App-header">
        <p>Gempy-Canvas</p>
        <Example />
        <ExampleHooks />
      </header>
    </div>
  );
}

export default App;
