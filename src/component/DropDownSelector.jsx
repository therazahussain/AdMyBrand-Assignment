import React, { useState } from 'react';
import AndOrOption from './AndOrOption';
import ArgsResult from './ArgsResult';
import ConstantResult from './ConstantResult';

const DropDownSelector = ({ args, setResult }) => {

    const [type, setType] = useState('');

    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    const handleSelector = () => {
        setType('');
        setResult('undefined');
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
                    <ArgsResult args={args} setResult={setResult} />
                )}

                {type === 'Constants' && (
                    <ConstantResult setResult={setResult} />
                )}

                {(type === 'AND' || type === 'OR') && (
                    <AndOrOption type={type} args={args} setType={setType} setResult={setResult}/>
                )}

            </div>


            <div>
                <button onClick={handleSelector}>X</button>
            </div>
        </div>
    );
}

export default DropDownSelector