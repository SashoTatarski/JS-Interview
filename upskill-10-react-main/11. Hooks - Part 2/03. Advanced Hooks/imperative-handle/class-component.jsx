import React from 'react';

class ClassComponent extends React.Component {
    element;

    render() {
        return (
            <div ref={el => this.element = el} style={{ backgroundColor: 'lightpink' }}>
                Class Component
                <br />
                <input onChange={this.props.onChange} value={this.props.value} />
            </div>
        )
    }
}

export default ClassComponent;