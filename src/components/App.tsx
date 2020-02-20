import React from "react";
import "./App.css";
import Example from "./Example"

function App() {
  console.log("App running ...")
  return (
    <div className="App">
      <header className="App-header">
        <p>Gempy-Canvas</p>
        <Example />
      </header>
    </div>
  );
}

export default App;
