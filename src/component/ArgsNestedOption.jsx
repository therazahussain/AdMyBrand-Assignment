import React, { useEffect, useState } from 'react'

const ArgsNestedOption = ({ args, setInnerResult, index, innerResult }) => {

    const [selectedArg, setSelectedArg] = useState(args[0].field);

    useEffect(() => {

        const selected = args.filter(item => item.field === selectedArg);

        const resultValue = selected[0].dropdown;

        const componentIndex = innerResult.findIndex((object) => object.name === index);

        if (componentIndex === -1) {

            setInnerResult((prev) => [...prev, { name: index, value: resultValue }]);
        }
        else {
            // to update 
            const newArray = [...innerResult];
            newArray[componentIndex] = { name: index, value: resultValue };
            setInnerResult(newArray);
        }

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

export default ArgsNestedOption