import React, { useState } from "react";
import "./App.css";
function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    setBgColor(bgColor === "white" ? "lightblue" : "white");
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <div style={{ backgroundColor: bgColor, height: "50vh", textAlign: "center", padding: "20px" }}>
        <h1>Hello, Welcome to React.js</h1>
        <button onClick={changeColor}>Change Background</button>
      </div>
      <div className="container" style={{ height: "50vh", textAlign: "center", padding: "20px" }}>
        <h1>Basic Math Calculator</h1>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        <button onClick={addNumbers}>Add</button>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;

