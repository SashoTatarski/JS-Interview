import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';

const DataComponent = () => {
    const [data, setData] = React.useState(null);
    const [page, setPage] = React.useState(1);

    const fetchData = async (usersPage) => {
        const resp = await fetchPage(usersPage);

        setData(resp.data);
    }

    const handlePageChange = (event) => {
        setPage(event.target.value);
    }

    React.useEffect(() => {
        fetchData(page);
    }, [page])

    return (
        <div>
            {data
                ? (
                    <div>
                        <h2>Users:</h2>
                        <ul>
                            {data.map((user) => <li>{user.first_name}&nbsp;{user.last_name}</li>)}
                        </ul>
                        <h3>Page:</h3>
                        <input type="number" min={1} max={2} value={page} onChange={handlePageChange} />
                    </div>
                )
                : (<h2>Loading Users</h2>)}
        </div>
    )
}

export default DataComponent;