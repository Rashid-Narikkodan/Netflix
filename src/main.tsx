import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { WatchProvider } from "./context/watchProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <WatchProvider>
        <App />
      </WatchProvider>
    </AuthProvider>
  </StrictMode>
);
