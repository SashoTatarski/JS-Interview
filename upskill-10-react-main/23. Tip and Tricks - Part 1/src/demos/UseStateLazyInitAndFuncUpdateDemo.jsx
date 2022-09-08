import React from "react";

const sleepAsync = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

const doSomethingAsync = () => sleepAsync(0);

// Could be computationally expensive, IO (i.e. using localStorage) or other "tricky" operation.
const getInitialState = () => {
  console.log("Getting initial state");
  return 0;
};

export default function UseStateLazyInitAndFuncUpdateDemo() {
  const initialState = getInitialState();
  const [count, setCount] = React.useState(initialState);

  const increment = async () => {
    await doSomethingAsync();
    setCount(count + 1);
  };

  return <button onClick={increment}>{count}</button>;
}
