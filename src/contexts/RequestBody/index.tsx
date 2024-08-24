import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { IHoroscopeDrawer, IHoroscopeRequest } from "../../types";
import { useUserData } from "../UserData";

type RequestBodyContextTypes = {
  body: IHoroscopeRequest;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  language: string | null;
  setLanguage: (language: string) => void;
  setSign: (sign?: string) => void;
  dataDrawer: IHoroscopeDrawer | null;
  openDrawer: ({ sign, horoscope }: IHoroscopeDrawer) => void;
  closeDrawer: () => void;
};

export const RequestBodyContext = createContext<RequestBodyContextTypes>(
  {} as RequestBodyContextTypes
);

export const RequestBodyContextProvider = ({ children }: PropsWithChildren) => {
  const { language_code } = useUserData();
  const language = localStorage.getItem("i18nextLng") || language_code;
  const [loading, setLoading] = useState<boolean>(true);
  const loaded = sessionStorage.getItem("loaded");
  const [dataDrawer, setDataDrawer] = useState<IHoroscopeDrawer | null>(null);

  const [body, setBody] = useState<IHoroscopeRequest>({
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

  const openDrawer = ({ sign, horoscope }: IHoroscopeDrawer) => {
    setDataDrawer({ sign, horoscope });
  };

  const closeDrawer = () => {
    setDataDrawer(null);
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
        openDrawer,
        closeDrawer,
        dataDrawer,
      }}
    >
      {children}
    </RequestBodyContext.Provider>
  );
};

export const useRequestBody = () => useContext(RequestBodyContext);
