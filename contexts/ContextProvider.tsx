import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type StateContextType = {
  user: {};
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState<string | null>(null);

  const setToken = async (token: string | null) => {
    try {
      if (token) {
        await AsyncStorage.setItem("ACCESS_TOKEN", token);
      } else {
        await AsyncStorage.removeItem("ACCESS_TOKEN");
      }
      _setToken(token);
    } catch (error) {}
  };

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("ACCESS_TOKEN");
        if (storedToken) {
          _setToken(storedToken);
        }
      } catch (error) {
        console.error("Failed", error);
      }
    };

    loadToken();
  }, []);

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
