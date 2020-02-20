import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import App from "./components/App";
import "./index.css";

// https://codersera.com/blog/react-redux-hooks-with-typescript/
// https://react-redux.js.org/next/api/hooks#using-hooks-in-a-react-redux-app

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById("root"));
