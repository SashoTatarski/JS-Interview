import React from 'react';
import { counterReducer } from './counter-reducer';

function Counter() {
    const [count, dispatchCount] = React.useReducer(counterReducer, 0);

    const handleIncrement = () => {
        dispatchCount({ type: 'increment' });
    }

    const handleDecrement = () => {
        dispatchCount({ type: 'decrement' })
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