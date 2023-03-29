import { useState } from "react";
import "./App.css"
import ArgumentsSection from "./component/ArgumentsSection"
import DropDownSelector from "./component/DropDownSelector";


function App() {
  const [numComponents, setNumComponents] = useState(1);
  const [args, setArguments] = useState([{ field: 'newarg', dropdown: false }]);
  const [result, setResult] = useState("undefined");
  const [type, setType] = useState('');

  const handleButtonClick = () => {
    setNumComponents(numComponents + 1);
    setArguments((args) => [...args, { field: 'newarg', dropdown: false }]);
  };

  const argsComponents = [];
  for (let i = 0; i < numComponents; i++) {
    argsComponents.push(
      <div key={i}>
        <ArgumentsSection index={i} args={args} setArguments={setArguments} />
      </div>
    );
  }

  return (
    <div>

      {argsComponents}
      <button onClick={handleButtonClick}>+ add args</button>
      <DropDownSelector args={args} result={result} setResult={setResult} type={type} setType={setType}></DropDownSelector>
      <div>
        Result: {`${result}`}
      </div>
    </div>
  );
}

export default App;
