import React from 'react';

const FunctionalComponent = (props) => {
    const element = React.useRef(null);

    return (
        <div ref={element} style={{ backgroundColor: 'lightgreen' }}>
            Functional Component
            <br />
            <input onChange={props.onChange} value={props.value} />
        </div>
    )
}

export default FunctionalComponent;