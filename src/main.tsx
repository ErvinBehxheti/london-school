import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./resources.ts";
import { HelmetProvider } from 'react-helmet-async';

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
  <App />
</HelmetProvider>
);

export default i18n