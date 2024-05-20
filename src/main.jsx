import React from "react";
import { createRoot } from "react-dom/client";
import { TaskProvider } from "./context/TaskState.jsx";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <TaskProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TaskProvider>
);
