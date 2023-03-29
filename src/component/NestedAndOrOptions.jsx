import React, { useState } from 'react';
import AndOrOption from './AndOrOption';
import ArgsNestedOption from './ArgsNestedOption';
import ConstantNestedOption from './ConstantNestedOption';

const SelectAndOr = ({ args, setInnerResult, index, innerResult, setResult }) => {

    const [type, setType] = useState('');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSelector = () => {
        const componentIndex = innerResult.findIndex((object) => object.name === index);

        if(componentIndex !== -1) {
            const newarr = [...innerResult]
            newarr.pop(componentIndex);
            setInnerResult(newarr)
        }
        setType('');
    }

    return (
        <div style={{ display: "flex" }}>
            <div>
                {type === "" && <select value={type} onChange={handleTypeChange}>
                    <option value="Select">Select...</option>
                    <option value="Args">Args</option>
                    <option value="Constants">Constants</option>
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                </select>}

                {type === 'Args' && (
                    <ArgsNestedOption args={args} setInnerResult={setInnerResult} index={index} innerResult={innerResult}/>
                )}

                {type === 'Constants' && (
                    <ConstantNestedOption setInnerResult={setInnerResult} index={index} innerResult={innerResult}/>
                )}

                {(type === 'AND') && (
                    <AndOrOption type={type} args={args} setInnerResult={setInnerResult} setResult={setResult}/>
                )}


                {(type === 'OR') && (
                    <AndOrOption type={type} args={args} />
                )}
            </div>


            <div>
                <button onClick={handleSelector}>X</button>
            </div>
        </div>
    );
}

export default SelectAndOr