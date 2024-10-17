import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";
import { AppLayout } from "./layouts/AppLayout.tsx";
// import { App as AntdApp } from "antd";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <UserProvider>
        {/* <AntdApp> */}
        <AppLayout>
          <App />
        </AppLayout>
        {/* </AntdApp> */}
      </UserProvider>
    </LanguageProvider>
  </React.StrictMode>
);
