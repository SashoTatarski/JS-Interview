import React from 'react';

import ClassComponent from './class-component';
import FunctionalComponent from './functional-component';

import './styles.css'

const App = () => {
    const [selected, setSelected] = React.useState(null);

    const tl = React.useRef(null);
    const tr = React.useRef(null);
    const bl = React.useRef(null);
    const br = React.useRef(null);

    const handleClick = (ref) => {
        setSelected(ref.current);
    }

    return (
        <div style={{ position: 'relative', height: 400, background: 'lightgray' }}>
            <button ref={tl} className="top left" onClick={handleClick.bind(undefined, tl, 'top left')}>Align to Me</button>
            <button ref={tr} className="top right" onClick={handleClick.bind(undefined, tr, 'top right')}>Align to Me</button>
            <button ref={bl} className="bottom left" onClick={handleClick.bind(undefined, bl, 'bottom left')}>Align to Me</button>
            <button ref={br} className="bottom right" onClick={handleClick.bind(undefined, br, 'bottom right')}>Align to Me</button>
            <ClassComponent anchor={selected} />
            <FunctionalComponent anchor={selected} />
        </div>
    )
}

export default App;
