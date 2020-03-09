import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./typography";

createGlobalStyle`
    ${reset};
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #ecf0f1;
    }`;

ReactDOM.render(<App />, document.getElementById("root"));
