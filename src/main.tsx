import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createClient, Provider, fetchExchange } from "urql";

const client = createClient({
  url: import.meta.env.VITE_API_URL || "http://localhost:4000/graphql",
  exchanges: [fetchExchange],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </StrictMode>,
);
