import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    console.log(count)
  }
  return (
    <>
      <h1>This is counter app</h1>
      <h4>Counter value: {count}</h4>
      <button onClick={addValue}>Add +</button>
    </>
  );
}

export default App;
