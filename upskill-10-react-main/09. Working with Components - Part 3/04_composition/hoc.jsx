import React from 'react';
import * as ReactDOM from 'react-dom';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null }
  }
  componentDidMount() {
    getName(name => {
      this.setState({ name });
    })
  }
  render() {
    if (this.state.name === null) {
      return 'Loading name ...';
    }
    return <p>{this.state.name}</p>
  }
}

ReactDOM.render(
  <User />,
  document.querySelector('#root')
);

function getName(done) {
  setTimeout(() => {
    done('Ivan');
  }, 2000);
}