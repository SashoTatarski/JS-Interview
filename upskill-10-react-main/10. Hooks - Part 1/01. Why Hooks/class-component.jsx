import React from 'react';

// 1.

class DataSource {
    listeners = [];

    getStudents = () => {
        return [
            { id: 0, name: 'Kiril', nickname: 'kiko' },
            { id: 1, name: 'Ivan', nickname: 'ivn' },
            { id: 2, name: 'Stoyan', nickname: '100yan' }
        ]
    }
    addChangeListener = (callback) => {
        this.listeners.push(callback);
    }
    removeChangeListener = (callback) => {
        this.listeners.filter((l) => l !== callback);
    }
}

const dataSource = new DataSource();

class Student extends React.Component {
    render() {
        return (
            <div>
                <h2>name: {this.props.student.name}<br /><span>nickname: {this.props.student.nickname}</span></h2>
            </div>
        )
    }
}

class StudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: this.props.data
        };
    }

    render() {
        return (
            <div>
                {this.state.students.map((student) => (
                    <Student student={student} key={student.id} />
                ))}
            </div>
        );
    }
}

const StudentListWithData = withData(
    StudentList,
    (dataSource) => dataSource.getStudents()
);

StudentListWithData.displayName = 'StudentListWithData';

function withData(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(dataSource, props)
            };
        }

        componentDidMount() {
            // ... that takes care of the subscription...
            dataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            dataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(dataSource, this.props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />;
        }
    };
}

export default StudentListWithData;

// 2.

class ThemeSource {
    listeners = [];

    getTheme = () => {
        return 'material'
    }

    addChangeListener = (callback) => {
        this.listeners.push(callback);
    }
    removeChangeListener = (callback) => {
        this.listeners.filter((l) => l !== callback);
    }
}

const themeSource = new ThemeSource();

function withTheme(WrappedComponent, selectTheme) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                theme: selectTheme(themeSource, props)
            }
        }

        handleChange() {
            this.setState({
                theme: selectTheme(themeSource, this.props)
            });
        }

        render() {
            return <WrappedComponent theme={this.state.theme} {...this.props} />;
        }
    }
}

const StudentListWithDataAndTheme = withTheme(
    StudentListWithData,
    (themeSource) => themeSource.getTheme()
)

StudentListWithDataAndTheme.displayName = 'StudentListWithDataAndTheme';

// export default StudentListWithDataAndTheme;