import React from 'react';
import * as ReactDOM from 'react-dom';

function Navigation({ children }) {
  return <nav className="mt5 block">{children}</nav>;
}

function Menu() {
  return (
    <Navigation>
      <>
        <button onClick={() => {}}>AAA</button>
        <button onClick={() => {}}>BBB</button>
      </>
    </Navigation>
  )
}

ReactDOM.render(
  <Menu />,
  document.querySelector('#root')
);