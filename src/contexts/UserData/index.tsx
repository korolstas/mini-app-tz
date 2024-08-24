import WebApp from "@twa-dev/sdk";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type UserDataTypes = {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
};

export const UserDataContext = createContext<UserDataTypes>(
  {} as UserDataTypes
);

export const UserDataContextProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserDataTypes>({} as UserDataTypes);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserDataTypes);
    }
  }, []);

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
