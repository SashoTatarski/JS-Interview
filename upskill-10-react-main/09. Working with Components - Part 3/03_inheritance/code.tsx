import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  onButtonClick(what) {
    console.log(`Button clicked ${what}.`)
  }
}

class Menu extends Navigation {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button onClick={() => this.onButtonClick('AAA')}>AAA</button>
        <button onClick={() => this.onButtonClick('BBB')}>BBB</button>
      </>
    )
  }
}

ReactDOM.render(
  <Menu />,
  document.querySelector('#root')
);