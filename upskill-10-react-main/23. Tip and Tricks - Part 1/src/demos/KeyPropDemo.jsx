import React from "react";

const Counter = () => {
  console.log("Counter called");

  const [count, setCount] = React.useState(() => {
    console.log("Counter useState initializer");

    return 0;
  });

  const increment = () => setCount((c) => c + 1);

  React.useEffect(() => {
    console.log("Counter useEffect callback");

    return () => {
      console.log("Counter useEffect cleanup");
    };
  }, []);

  console.log("Counter returning react elements");

  return <button onClick={increment}>{count}</button>;
};

export default function KeyPropDemo() {
  const [counterKey, setCounterKey] = React.useReducer((c) => c + 1, 0);

  return (
    <div>
      <button onClick={setCounterKey}>reset</button>
      <Counter key={counterKey} />
    </div>
  );
}
