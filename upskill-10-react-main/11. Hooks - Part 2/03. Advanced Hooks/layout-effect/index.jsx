import React from 'react';

import MovableBox from './movable-box';

import './styles.css'

export const BoxesContext = React.createContext({ current: new Map() })

const LayoutEffect = () => {
    const boxes = React.useRef(new Map());
    const [selected, setSelected] = React.useState(null);

    const tl = React.useRef(null);
    const tr = React.useRef(null);
    const bl = React.useRef(null);
    const br = React.useRef(null);

    const handleClick = (ref) => {
        setSelected(ref.current);
    }

    return (
        <BoxesContext.Provider value={boxes}>
            <div style={{ position: 'relative', height: 400, background: 'lightgray' }}>
                <button ref={tl} className="top left" onClick={handleClick.bind(undefined, tl, 'top left')}>Align to Me</button>
                <button ref={tr} className="top right" onClick={handleClick.bind(undefined, tr, 'top right')}>Align to Me</button>
                <button ref={bl} className="bottom left" onClick={handleClick.bind(undefined, bl, 'bottom left')}>Align to Me</button>
                <button ref={br} className="bottom right" onClick={handleClick.bind(undefined, br, 'bottom right')}>Align to Me</button>
                <MovableBox anchor={selected} id={0} />
                <MovableBox anchor={selected} id={1} />
                <MovableBox anchor={selected} id={2} />
                <MovableBox anchor={selected} id={3} />
                <MovableBox anchor={selected} id={4} />
            </div>
        </BoxesContext.Provider>
    )
}

export default LayoutEffect;
