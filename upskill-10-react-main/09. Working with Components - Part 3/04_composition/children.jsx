import React from 'react';
import * as ReactDOM from 'react-dom';

function Menu() {
  return (
    <nav className="mt5 block">
      <>
        <button onClick={() => {}}>AAA</button>
        <button onClick={() => {}}>BBB</button>
      </>
    </nav>
  )
}

ReactDOM.render(
  <Menu />,
  document.querySelector('#root')
);