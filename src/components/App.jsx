import React from "react";
import { useState } from "react/cjs/react.development";


function App() {
  // setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);  

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  
  return (
    <div className="main">
      <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
    </div>
  );
}

export default App;
