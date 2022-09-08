import React from 'react';
import ThemeContext from '../theme-context';
import { contrast } from '../../../../utils/contrast';

export const useThemeBackground = (color) => {
    const [theme] = React.useContext(ThemeContext);

    return contrast(color, theme === 'dark' ? -0.2 : 0.2)
}