import React, {useState} from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>{`You have clicked ${count} times.`}</h1>
      <button type="button" onClick={() => {setCount(count + 1)}}>Increment</button>
    </div>
  );
}

export {App};
