import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

// Create a root element to render the application
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

// Create a root to render the React application
const root = ReactDOM.createRoot(rootElement);

// Render the application within the Provider for Redux store
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Measure performance of the application
reportWebVitals();
