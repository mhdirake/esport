import backend from "i18next-http-backend";
import detector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: process.env.REACT_APP_DEFAULT_LANGUAGE || "en",
    fallbackLng: process.env.REACT_APP_DEFAULT_LANGUAGE || "en", // use en if detected lng is not available
    saveMissing: true, // send not translated keys to endpoint
  });

export default i18n;
