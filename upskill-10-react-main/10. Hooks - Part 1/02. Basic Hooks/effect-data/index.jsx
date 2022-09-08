import React from 'react';

import ClassComponent from './class-component';
import FunctionalComponent from './functional-component';

const App = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ClassComponent />
            <FunctionalComponent />
        </div>
    )
}

export default App;
