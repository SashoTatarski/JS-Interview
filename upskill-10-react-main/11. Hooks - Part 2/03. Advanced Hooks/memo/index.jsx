import React from 'react';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Main from './components/main';

import ThemeContext from './theme-context';

const App = () => {
    const [theme, setTheme] = React.useState('light');

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <div style={{ backgroundColor: '#000000', padding: 16 }}>
                <Navbar />
                <Main />
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
}

export default App;
