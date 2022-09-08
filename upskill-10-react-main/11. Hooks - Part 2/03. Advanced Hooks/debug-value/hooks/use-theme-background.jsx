import React from 'react';
import ThemeContext from '../theme-context';
import { contrast } from '../../../../utils/contrast';

export const useThemeBackground = (color) => {
    const [theme] = React.useContext(ThemeContext);

    const backgroundColor = React.useMemo(
        () => contrast(color, theme === 'dark' ? -0.2 : 0.2),
        [color, theme]
    )

    return backgroundColor
}