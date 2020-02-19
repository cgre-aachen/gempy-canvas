import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store"
import App from "./components/App";
import "./index.css";

// https://codersera.com/blog/react-redux-hooks-with-typescript/
// https://react-redux.js.org/next/api/hooks#using-hooks-in-a-react-redux-app

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
