import React from 'react';
import './App.css';

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
      </List>
    </div>
  )
}

export default App;
