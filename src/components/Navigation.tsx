import React, { createContext, useContext, useState } from 'react';

interface GlobalContextProps {
  children: React.ReactNode;
}

const GlobalContext = createContext<{}>({});

export const GlobalProvider: React.FC<GlobalContextProps> = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);