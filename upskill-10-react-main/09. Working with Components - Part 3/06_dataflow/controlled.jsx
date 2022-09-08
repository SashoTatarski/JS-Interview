import React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { value: '' }
  }
  render() {
  	return <input value={ this.state.value }/>; 
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));