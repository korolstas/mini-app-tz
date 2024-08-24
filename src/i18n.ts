import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18n from "i18next";
import { useEffect } from "react";

import en from "../public/locales/en/translation.json";
import ru from "../public/locales/ru/translation.json";
import { useRequestBody } from "./contexts";

export const useInitI18n = () => {
  const { language } = useRequestBody();

  useEffect(() => {
    i18n
      .use(Backend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        debug: true,
        lng: language || "en",
        fallbackLng: language || "en",
        interpolation: {
          escapeValue: false,
        },
        resources: {
          en: { translation: en },
          ru: { translation: ru },
        },
      });
  }, []);
};

export default i18n;
