import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = { propertyName: '' }
        this.handleEvent = this.handleEvent.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {} // Rarely Used

    static getDerivedStateFromError(error) {} // Rarely Used

    componentDidMount() {}

    shouldComponentUpdate(nextProps, nextState, nextContext) {} // Rarely Used

    getSnapshotBeforeUpdate(prevProps, prevState) {} // Rarely Used

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {}

    componentDidCatch(error, errorInfo) {} // Rarely Used

    UNSAFE_componentWillMount() {} // Legacy

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {} // Legacy

    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {} // Legacy

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }

    render() {
        return <>
        <h2>App 2 component</h2></>
    }
}