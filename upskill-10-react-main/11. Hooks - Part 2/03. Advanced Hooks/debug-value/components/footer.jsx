import React from 'react';
import { useThemeBackground } from '../hooks/use-theme-background';


const Footer = () => {
    const backgroundColor = useThemeBackground('#FFFF00');

    return (<div style={{ backgroundColor }}>footer</div>)
}

export default Footer