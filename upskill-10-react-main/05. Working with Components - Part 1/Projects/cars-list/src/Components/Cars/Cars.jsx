import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Car from '../Car/Car';
import "./Cars.css"
class Cars extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="cars-container">
                {this.renderCars()}                
            </div>
        );
    }
    renderCars() {
        if (this.props.cars && this.props.cars.length) {
            return this.props.cars.map((car) => <Car key={car.id} make={car.make} model={car.model}/>)
        }
        return (<h5>No cars available</h5>)
    }
}
 
export default Cars;

Cars.propTypes = {
    cars: PropTypes.array
}