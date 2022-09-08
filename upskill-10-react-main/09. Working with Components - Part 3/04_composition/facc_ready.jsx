import React from 'react';
import * as ReactDOM from 'react-dom';

function CoffeeMachine({ children }) {
  const Black = () => 'Black';
  const Latte = () => 'Latte';
  const Cappuccino = () => 'Cappuccino';

  return children(Black, Latte, Cappuccino);
}

function Breakfast() {
  return (
    <CoffeeMachine>
      {(Black, Latte, Cappuccino) => {
        // ... logic
        return <Cappuccino />;
      }}
    </CoffeeMachine>
  )
}

ReactDOM.render(
  <Breakfast />,
  document.querySelector('#root')
);