import React from 'react';
import * as ReactDOM from 'react-dom';

function Comp() {
  return 10;
}

ReactDOM.render(
  <Comp />,
  document.querySelector('#root')
);