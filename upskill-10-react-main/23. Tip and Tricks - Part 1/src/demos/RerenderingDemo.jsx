import React from "react";

const Logger = ({ label }) => {
  console.log(`${label} rendered`);
  return null;
};

export default function RerenderingDemo() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);

  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
      <Logger label='counter' />
    </div>
  );
}
