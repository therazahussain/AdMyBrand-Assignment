import React, { useEffect, useState } from 'react'

const ArgsResult = ({ args, setResult }) => {

    const [selectedArg, setSelectedArg] = useState(args[0].field);

    useEffect(() => {
        const selected = args.filter(item => item.field === selectedArg);
        const resultValue = selected[0].dropdown;
        setResult(resultValue);
    }, [selectedArg, args])


    const handleChange = (e) => {
        e.preventDefault()
        setSelectedArg(e.target.value);
    }

    return (
        <>
            <select onChange={handleChange}>
                <option value="Select" disabled>Select...</option>
                {args.map((arg, key) => (
                    <option key={key} value={args.field}>
                        {arg.field}
                    </option>
                ))}
            </select>
        </>
    )
}

export default ArgsResult