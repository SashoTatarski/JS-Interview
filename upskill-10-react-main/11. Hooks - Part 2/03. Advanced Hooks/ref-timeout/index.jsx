import React from 'react';
import { countries } from './countries';

const Ref = () => {
    const [value, setValue] = React.useState('');
    const [end, setEnd] = React.useState();
    const [correct, setCorrect] = React.useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            let found = countries.find(c => c.name.toLowerCase() === value.toLowerCase())
            if (found) {
                setCorrect([...correct, found.name]);
            }
            setValue('');
        }
    }

    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', opacity: end ? 0.5 : 1 }}>
            <div>
                <input
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <ul style={{ columnCount: '5' }}>
                {countries.map((country) => (
                    <li style={{ backgroundColor: correct.some(c => c === country.name) ? 'green' : undefined }} key={country.names}>{country.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Ref;