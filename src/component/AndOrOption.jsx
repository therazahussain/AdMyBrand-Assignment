import React, { useEffect, useState } from 'react'
import NestedAndOrOptions from './NestedAndOrOptions';

const AndOrOption = ({ type, args, setType, setResult }) => {

    const [componentCount, setComponentCount] = useState(args.length);
    const [innerResult, setInnerResult] = useState([]);


    useEffect(() => {
        if (type === "AND") {
            if (innerResult.length !== 0) {
                const ans = innerResult.find(obj => obj.value === 'false' || obj.value === false);
                if (ans) {
                    setResult('false');
                } else {
                    setResult('true');
                }
            } else {
                setResult("undefined")
            }
        }

        if (type === "OR") {
            if (innerResult.length !== 0) {
                const ans = innerResult.find(obj => obj.value === "true" || obj.value === true);
                if (ans) {
                    setResult('true');
                } else {
                    setResult('false');
                }
            } else {
                setResult("undefined")
            }
        }


    }, [innerResult, type])


    const handleChange = (e) => {
        setType(e.target.value);
    }

    const addComponent = () => {
        setComponentCount(componentCount + 1);
    }


    const SelectorComponents = [];
    for (let i = 0; i < componentCount; i++) {
        SelectorComponents.push(
            <div key={i}>
                <NestedAndOrOptions index={i} args={args} setInnerResult={setInnerResult} innerResult={innerResult} setResult={setResult} />
            </div>,
        );
    }

    return (
        <>
            <select value={type} onChange={handleChange}>
                <option value="OR">OR</option>
                <option value="AND">AND</option>
            </select>

            {SelectorComponents}
            <button onClick={addComponent}>Add Componenet</button>
        </>
    )
}

export default AndOrOption