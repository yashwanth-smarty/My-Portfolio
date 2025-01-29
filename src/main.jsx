import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App"; // Your main App component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Use HashRouter for GitHub Pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
