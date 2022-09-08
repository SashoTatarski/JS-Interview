import React from "react";

const CountContext = React.createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const value = { count, increment: () => setCount((c) => c + 1) };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

const useCount = () => {
  const countValue = React.useContext(CountContext);
  if (typeof countValue === "undefined") {
    throw new Error("useCount must be used within a CountProvider");
  }

  return countValue;
};

export { CountProvider, useCount };
