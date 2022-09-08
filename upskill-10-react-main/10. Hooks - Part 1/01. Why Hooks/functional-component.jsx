import React from 'react';

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

const Student = (props) => {
    return (
        <div>
            <h2>name: {props.student.name}<br /><span>nickname: {props.student.nickname}</span></h2>
        </div>
    )
}

const useData = () => {
    const [students, setStudents] = React.useState(dataSource.getStudents());

    const handleChange = React.useCallback((newStudents) => {
        setStudents(newStudents)
    }, [])

    React.useEffect(() => {
        dataSource.addChangeListener(handleChange);

        return dataSource.removeChangeListener(handleChange);
    }, [handleChange])

    return students;
}

const StudentList = () => {
    const students = useData();

    return (
        <div>
            {students.map((student) => (
                <Student student={student} key={student.id} />
            ))}
        </div>
    );
}

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

const useTheme = () => {
    const [theme, setTheme] = React.useState(themeSource.getTheme());

    const handleChange = React.useCallback((newTheme) => {
        setTheme(newTheme);
    }, [])

    React.useEffect(() => {
        dataSource.addChangeListener(handleChange);

        return dataSource.removeChangeListener(handleChange);
    }, [handleChange])
}

export default StudentList;