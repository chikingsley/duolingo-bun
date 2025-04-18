/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

const client = new ConvexReactClient("http://localhost:4000");

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <ConvexProvider client={client}>
        <App />
      </ConvexProvider>
    </BrowserRouter>
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
