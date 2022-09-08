import React from 'react';
import * as ReactDOM from 'react-dom';

type GreetingProps = {
  name: string;
}

class Greeting extends React.Component<GreetingProps> {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

ReactDOM.render(
  <Greeting name={"foobar"}/>,
  document.querySelector('#root')
);