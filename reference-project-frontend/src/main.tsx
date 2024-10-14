import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";
import { AppLayout } from "./layouts/AppLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <UserProvider>
        <AppLayout>
          <App />
        </AppLayout>
      </UserProvider>
    </LanguageProvider>
  </React.StrictMode>
);
