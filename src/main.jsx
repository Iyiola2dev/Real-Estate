import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";


//import house context provider
import HouseContextProvider from "./components/HouseContext.jsx";

createRoot(document.getElementById("root")).render(
  <HouseContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </HouseContextProvider>
);
