import React from 'react';

import { useThemeBackground } from '../hooks/use-theme-background';

const Sidenav = () => {
    const backgroundColor = useThemeBackground('#009BFF');

    return (
        <section style={{ backgroundColor }}>
            <ul>
                <li>Lorem, ipsum.</li>
                <li>Quae, sit?</li>
                <li>Maxime, assumenda.</li>
                <li>Quos, dignissimos!</li>
                <li>Harum, itaque.</li>
            </ul>

        </section>
    )
}

export default Sidenav