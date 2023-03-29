import React, { useEffect, useState } from 'react'

const ConstantResult = ({ setResult }) => {

    const [value, setValue] = useState(false);

    useEffect(() => {
        setResult(value);
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <select value={value} onChange={handleChange}>
                <option value="Select" disabled>Select...</option>
                <option value={false}>false</option>
                <option value={true}>true</option>
            </select>
        </>
    )
}

export default ConstantResult