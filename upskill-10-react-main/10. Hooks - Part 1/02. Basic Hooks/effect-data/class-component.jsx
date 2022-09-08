import React from 'react';
import { fetchPage } from '../../../utils/fetch-page';

class DataComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                {this.state.data.length
                    ? (
                        <div>
                            <h2>Users:</h2>
                            <ul>
                                {this.state.data.map((item) => <li>{item.title}</li>)}
                            </ul>
                        </div>
                    )
                    : (<h2>Loading Users</h2>)}
            </div>
        )
    }
}

export default DataComponent;