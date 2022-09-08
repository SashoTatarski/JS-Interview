import React from "react";

const CountStateContext = React.createContext();
const CountUpdaterContext = React.createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);

  return (
    <CountStateContext.Provider value={count}>
      <CountUpdaterContext.Provider value={setCount}>
        {children}
      </CountUpdaterContext.Provider>
    </CountStateContext.Provider>
  );
};

const useCountState = () => {
  const countState = React.useContext(CountStateContext);
  if (typeof countState === "undefined") {
    throw new Error("useCountState must be used within a CountProvider");
  }

  return countState;
};

const useCountUpdater = () => {
  const setCount = React.useContext(CountUpdaterContext);
  if (typeof setCount === "undefined") {
    throw new Error("useCountUpdater must be used within a CountProvider");
  }

  const increment = () => setCount((c) => c + 1);

  return increment;
};

export { CountProvider, useCountState, useCountUpdater };
