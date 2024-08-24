import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { THoroscopeRequest } from "../../types";
import { useUserData } from "../UserData";

type RequestBodyContextTypes = {
  body: THoroscopeRequest;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  language: string | null;
  setLanguage: (language: string) => void;
  setSign: (sign?: string) => void;
};

export const RequestBodyContext = createContext<RequestBodyContextTypes>(
  {} as RequestBodyContextTypes
);

export const RequestBodyContextProvider = ({ children }: PropsWithChildren) => {
  const { language_code } = useUserData();
  const language = localStorage.getItem("i18nextLng") || language_code;
  const [loading, setLoading] = useState<boolean>(true);
  const loaded = sessionStorage.getItem("loaded");

  const [body, setBody] = useState<THoroscopeRequest>({
    sign: undefined,
    language: language === "ru" ? "original" : "translated",
    period: "today",
  });

  const setLanguage = (language: string) => {
    const lng = language === "ru" ? "original" : "translated";

    setBody((prevBody) => ({
      ...prevBody,
      language: lng,
    }));
  };

  const setSign = (sign?: string) => {
    setBody((prevBody) => ({
      ...prevBody,
      sign,
    }));
  };

  useEffect(() => {
    window.onload = function () {
      if (loaded) {
        localStorage.removeItem("i18nextLng");
      }
    };
  }, [loaded]);

  return (
    <RequestBodyContext.Provider
      value={{
        body,
        language,
        setLoading,
        setLanguage,
        setSign,
        loading,
      }}
    >
      {children}
    </RequestBodyContext.Provider>
  );
};

export const useRequestBody = () => useContext(RequestBodyContext);
