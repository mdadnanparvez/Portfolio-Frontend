import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { getTheme, applyTheme } from "./utils/theme";
import Navbar from "./components/layout/Navbar";

applyTheme(getTheme());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      
    </BrowserRouter>
  </React.StrictMode>
);