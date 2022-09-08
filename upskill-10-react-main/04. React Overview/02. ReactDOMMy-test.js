'use strict';

describe('ReactDOMMy', () => {
  let React;
  let ReactDOM;
  let ReactTestUtils;

  beforeEach(() => {
    jest.resetModules();
    React = require('react');
    ReactDOM = require('react-dom');
    ReactTestUtils = require('react-dom/test-utils');
  });

  it('works', () => {
    // console.log("hello");
    function List({ children }) {
      return (
        <ul>
          {children}
        </ul>
      )
    }
    function ListItem({ children }) {
      return (
        <li>
          {children}
        </li>
      )
    }
    function App() {
      return (
        <div>
          <List>
            <ListItem>
              Item 1
            </ListItem>
            <ListItem>
              Item 2
            </ListItem>
            <ListItem>
              Item 3
            </ListItem>
          </List>s
        </div>
      )
    }
    const container = document.createElement('div');
    ReactDOM.render(<App />, container);
    expect(container.innerHTML).toBe(
      `<div><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul></div>`
    )
  })
});
