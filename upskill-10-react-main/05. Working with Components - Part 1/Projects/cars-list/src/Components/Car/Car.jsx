import React, { Component } from 'react';
import propTypes from "prop-types";
import "./Car.css"
class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="car-item">
                <span>Make: {this.props.make}. Model: {this.props.model }</span>
            </div>
        );
    }
}
 
export default Car;
Car.propTypes = {
    id: propTypes.string,
    make: propTypes.string,
    model: propTypes.string
}