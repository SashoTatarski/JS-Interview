import React from 'react';
import logo from './logo.svg';
import './App.css';
import { default as CarsCollection } from "./Cars"
import Cars from './Components/Cars/Cars';
import StateCar from './Components/StateCar/StateCar';
function App() {
  return (
    <div className="App">
      
      <h2>Cars List</h2>
      <Cars cars={CarsCollection} />
      <h2>State Car</h2>
      <StateCar />
    </div>
  );
}

export default App;
