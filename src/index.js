import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
  position: positions.BOTTOM_CENTER,
  timeout: 2000,
  offset: "30px",
  type: "error",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <Router>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <App />
    </AlertProvider>
  </Router>,
  document.getElementById("root")
);
