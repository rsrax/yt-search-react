import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
require("dotenv").config();

ReactDOM.render(<App />, document.querySelector("#root"));
