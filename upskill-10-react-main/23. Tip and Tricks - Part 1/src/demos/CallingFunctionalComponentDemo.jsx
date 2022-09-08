import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);

  return <button onClick={increment}>{count}</button>;
};

export default function CallingFunctionalComponentDemo() {
  const [items, setItems] = React.useState([]);

  const addItem = () => setItems((i) => [...i, { id: i.length }]);

  return (
    <div>
      <button onClick={addItem}>Add Items</button>
      <div>{items.map(Counter)}</div>
    </div>
  );
}
