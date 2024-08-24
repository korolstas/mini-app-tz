import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import {
  RequestBodyContextProvider,
  UserDataContextProvider,
} from "./contexts";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <UserDataContextProvider>
    <RequestBodyContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </RequestBodyContextProvider>
  </UserDataContextProvider>
);
