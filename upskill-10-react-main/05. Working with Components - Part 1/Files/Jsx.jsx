// Using JSX
const car = {
    make: "Audi",
    model: "RS6",
    power: "590HP"
}

function getFullCarInfo(car) {
    return `Make: ${car.make}, Model: ${car.model}, Power ${car.power}`;
}

const vehicle = (
    <h1>Car Info: {getFullCarInfo(car)}</h1>
);

ReactDOM.render(
    vehicle,
    document.getElementById('root')
);

// Attributes
const element = <div tabIndex="0"></div>;

const element = <img src={car.avatarUrl}></img>;

const element = <img src={user.avatarUrl} />;

const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

React.createElement("div", null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you here.")
);

