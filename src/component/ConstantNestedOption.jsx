import React, { useEffect, useState } from 'react'

const ConstantNestedOption = ({ setInnerResult, index, innerResult }) => {

    const [value, setValue] = useState(false);

    useEffect(()=>{
        setInnerResult((prev) => [...prev, { name: index, value: "false" }]);
    },[])

    const handleChange = (e) => {

        const componentIndex = innerResult.findIndex((object) => object.name === index);

        if (componentIndex === -1) {
            setInnerResult((prev) => [...prev, { name: index, value: e.target.value }]);
        }
        else {
            // to update 
            const newArray = [...innerResult];
            newArray[componentIndex] = { name: index, value: e.target.value };
            setInnerResult(newArray);
        }
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

export default ConstantNestedOption