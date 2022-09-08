import React from 'react';

import { useThemeBackground } from '../hooks/use-theme-background';

const Navbar = () => {
    const backgroundColor = useThemeBackground('#FF8800');

    return (<nav style={{ backgroundColor }}>navigation</nav>)
}

export default Navbar