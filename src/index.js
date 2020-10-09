import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, SignIn } from "./components"; //here we do not need to write index file it will automatically understand

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
