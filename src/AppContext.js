import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [name, setName] = useState("Seto Aryotomo");
  const [nim, setNim] = useState("A11.2021.13747");

  return (
    <AppContext.Provider value={{ name, setName, nim, setNim }}>
      {children}
    </AppContext.Provider>
  );
};
