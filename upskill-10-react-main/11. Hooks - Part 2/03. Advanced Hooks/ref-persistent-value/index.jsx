import React from 'react';

const INITIAL_VALUE = 0;

const Ref = () => {
    const [value, setValue] = React.useState(INITIAL_VALUE);

    const handleChange = React.useCallback(
        (event) => {
            setValue(event.target.value)
        }, [])

    return (
        <div>
            <input type="number" value={value} onChange={handleChange} />
        </div>
    )
}

export default Ref;