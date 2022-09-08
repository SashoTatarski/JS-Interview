import React from 'react';

function Counter() {
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(oldCount => oldCount - 1)
    }

    return (
        <div>
            Current value: {count}
            <button onClick={handleIncrement}>Increment (+)</button>
            <button onClick={handleDecrement}>Decrement (-)</button>
        </div>
    )
}

export default Counter;