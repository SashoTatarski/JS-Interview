import React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { value: '' }
    console.log('test233');
  }
  render() {
  	return <input
      value={ this.state.value }
      onChange={ e => this.setState({ value: e.target.value })}/>; 
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));