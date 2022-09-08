import React from 'react';

import Article from './article';
import Sidenav from './sidenav';
import TableOfContents from './table-of-contents';

import { useThemeBackground } from '../hooks/use-theme-background';

const Main = () => {
    const backgroundColor = useThemeBackground('#FF00FF');

    return (
        <div style={{ display: 'flex', backgroundColor, padding: 16 }}>
            <Sidenav />
            <Article />
            <TableOfContents />
        </div>
    )
}

export default Main