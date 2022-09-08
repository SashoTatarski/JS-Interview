import React from 'react';
import { useThemeBackground } from '../hooks/use-theme-background';

const Article = () => {
    const backgroundColor = useThemeBackground('#FFFFFF');

    return (
        <article
            style={{ backgroundColor, padding: 16 }}
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem aliquam porro exercitationem soluta sapiente animi enim provident totam iure consequuntur ducimus maiores earum ad incidunt magnam, veniam voluptas suscipit?
        </article>)
}

export default Article