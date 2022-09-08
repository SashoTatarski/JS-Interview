import React from 'react';

import Article from './article';
import Sidenav from './sidenav';
import TableOfContents from './table-of-contents';

// import { contrast } from '../../../../utils/contrast';

const Main = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: '#FF00FF', padding: 16 }}>
            <Sidenav />
            <Article />
            <TableOfContents />
        </div>
    )
}

export default Main