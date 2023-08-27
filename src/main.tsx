import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import App from "./App";
import "./index.css";
import { theme } from "./styles/theme/index";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
