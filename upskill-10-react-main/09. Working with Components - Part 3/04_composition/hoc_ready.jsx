import React from 'react';
import * as ReactDOM from 'react-dom';

function withName(Component) {
  return class NameLoader extends React.Component {
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
      return <Component {...this.props} name={this.state.name}/>
    }
  }
}

function User({ name }) {
  if (name === null) {
    return 'Loading name ...';
  }
  return <p>{name}</p>
}

const EnhancedUser = withName(User);

ReactDOM.render(
  <EnhancedUser />,
  document.querySelector('#root')
);

function getName(done) {
  setTimeout(() => {
    done('Krasimir');
  }, 2000);
}