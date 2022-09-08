import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';

const MovableBox = (props) => {
    const [data, setData] = React.useState([]);

    return (
        <div>
            {data.length
                ? (
                    <div>
                        <h2>Users:</h2>
                        <ul>
                            {data.map((user) => <li>{user.first_name}&nbsp;{user.last_name}</li>)}
                        </ul>
                    </div>
                )
                : (<h2>Loading Users</h2>)}
        </div>
    )
}

export default MovableBox;