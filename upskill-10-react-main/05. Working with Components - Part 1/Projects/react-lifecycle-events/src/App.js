import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCyclesComponet from './LifeCyclesComponet';

function App() {
  const [enableCounter, setEnableCounter] = useState(false)
  return (
    <div className="App">
      <button onClick={() => {setEnableCounter(!enableCounter)}}>{enableCounter ? "Disable Counter" : "Enable Counter"}</button>
      {enableCounter && <LifeCyclesComponet />}
    </div>
  );
}

export default App;
