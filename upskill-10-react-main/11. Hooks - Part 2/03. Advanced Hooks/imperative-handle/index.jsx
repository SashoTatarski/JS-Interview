import React from 'react';

import ClassComponent from './class-component';
import FunctionalComponent from './functional-component';

const ImperativeHandle = () => {
    const classRef = React.useRef(null);
    const functionalRef = React.useRef(null);

    const handleOnClassFocusClick = () => {
        // TODO;
    }

    const handleOnFunctionalFocusClick = () => {
        // TODO;
    }

    React.useEffect(() => {
        // TODO;
    })

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <button onClick={handleOnClassFocusClick}>Focus Class</button>
                <button onClick={handleOnFunctionalFocusClick}>Focus Functional</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ClassComponent ref={classRef} />
                <FunctionalComponent ref={functionalRef} />
            </div>
        </div>
    )
}

export default ImperativeHandle;