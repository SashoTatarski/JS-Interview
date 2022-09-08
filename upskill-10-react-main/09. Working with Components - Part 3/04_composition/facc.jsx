import React from 'react';
import * as ReactDOM from 'react-dom';

function CoffeeMachine() {
  const Black = () => 'Black';
  const Latte = () => 'Latte';
  const Cappuccino = () => 'Cappuccino';
  // conditional logic
  return <Cappuccino />
}

function Breakfast() {
  return <CoffeeMachine />
}

ReactDOM.render(
  <Breakfast />,
  document.querySelector('#root')
);