import React, { useState } from 'react';

const ArgumentsSection = ({ index, args, setArguments }) => {
  
  const [fieldValue, setFieldValue] = useState(args[index]?.field ?? '');
  const [dropdownValue, setDropdownValue] = useState(args[index]?.dropdown ?? '');


  // 
  const handleFieldChange = (event) => {
    setFieldValue(event.target.value);
    setArguments((args) => {
      const newArgs = [...args];
      if (newArgs[index]) {
        newArgs[index].field = event.target.value;
      }
      return newArgs;
    });
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
    setArguments((args) => {
      const newArgs = [...args];
      if (newArgs[index]) {
        newArgs[index].dropdown = event.target.value;
      }
      return newArgs;
    });
  };

  return (
    <div>
      <input type="text" value={fieldValue} onChange={handleFieldChange} style={{width:"100px"}}/>

      <select id={`dropdown-${index}`} value={dropdownValue} onChange={handleDropdownChange}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>
  );
}


export default ArgumentsSection