import React from 'react';

import { position } from '../../../utils/position';
import { align } from '../../../utils/align';
// import { findBeforeItem } from '../../../utils/find-before-item';
// import { calculateOffset } from '../../../utils/calculate-offset';
// import { BoxesContext } from './index';

const MovableBox = (props) => {
    const element = React.useRef();
    const [mount, setMount] = React.useState();

    React.useEffect(() => {
        align(element.current);
        setMount(true);
    }, [])


    React.useEffect(() => {
        if (props.anchor) {
            position(element.current, props.anchor)
        }
    })

    return (
        <div
            ref={element}
            style={{
                zIndex: 10,
                position: 'absolute',
                padding: '10px',
                background: '#b3ffa5',
                border: '1px solid green',
                opacity: mount ? 1 : 0,
                transition: 'all 1.5s ease-in-out',
            }}
        >
            Functional
        </div>
    )
}

export default MovableBox;