import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCyclesComponet extends Component {
    constructor(props) {
        console.log("Constructor")
        super(props);
        this.state = {
            counter: 1
        }
    }

    //Mounting
    static getDerivedStateFromProps(props, state) {
        //Called right before the render method
        console.log(`getDerivedStateFromProps props: ${props}, state: ${state}`);
        return state
    }
    
    componentDidMount() {
      console.log("componentDidMount");  
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdte. nextProps: ${nextProps}, nextState: ${nextState}`)
        return true;
    }

    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`getSnapshotBeforeUpdate. prevProps: ${prevProps}, prevState: ${prevState}`);
        return {prevProps, prevState}
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    handleButtonClick = () => {
        // this.setState({ state: this.state ++ })
        this.setState((state, props) => ({
            counter: state.counter + 1
        }));
    }

    render() {
        console.log("render called");
        return (
            <div>
                <h3>Counter Component</h3>
                <div>Current counter: {this.state.counter}</div>
                <br />
                <button onClick={this.handleButtonClick}>Increase Counter</button> 
            </div>
        );
    }
}

LifeCyclesComponet.propTypes = {

};

export default LifeCyclesComponet;