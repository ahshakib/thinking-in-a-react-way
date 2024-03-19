import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is counter app</h1>
      <h4>Counter value: {count}</h4>
      <button onClick={()=>setCount(count < 20 ?count + 1: 20)}>Add +</button>
      <button onClick={()=>setCount(count > 0 ? count -1 : 0)}>Sub -</button>
    </>
  );
}

export default App;
