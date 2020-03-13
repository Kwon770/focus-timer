import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./typography";
import { Provider } from "react-redux";
import store from "store";

createGlobalStyle`
    ${reset};
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #ecf0f1;
    }`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
