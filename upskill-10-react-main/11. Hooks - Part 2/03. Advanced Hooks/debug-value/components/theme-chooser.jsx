import React from 'react';
import { useThemeBackground } from '../hooks/use-theme-background';
import ThemeContext from '../theme-context';

const ThemeChooser = () => {
    const [theme, setTheme] = React.useContext(ThemeContext);
    const backgroundColor = useThemeBackground('#FF0000');

    const handleClick = React.useCallback(
        () => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
        }, [theme, setTheme])

    return (
        <div style={{ backgroundColor, padding: 8 }}>
            <h2 >Theme: {theme}</h2>
            <button onClick={handleClick}>
                Change Theme
        </button>
        </div>
    )
}
export default ThemeChooser;