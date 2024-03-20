import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  
  return (
    <>
      <div style={{ backgroundColor: color, width: "100vw", height: "100vh" }}>
        <button onClick={()=>setColor('red')}>Red</button>
        <button onClick={()=>setColor('green')}>Green</button>
        <button onClick={()=>setColor('blue')}>Blue</button>
        <button onClick={()=>setColor('yellow')}>Yellow</button>
        <button onClick={()=>setColor('orange')}>Orange</button>
        <i className='bx bx-reset' onClick={() => setColor("white")}></i>
      </div>
    </>
  );
}

export default App;
