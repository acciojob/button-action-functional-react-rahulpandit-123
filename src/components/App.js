import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [paragraph, setParagraph] = useState("")
  function para(){
    setParagraph("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
  }
  return (
    <div id="main">
      <button id="click" onClick={para}>click me</button>
      <p>{paragraph}</p>
    </div>
  );
}


export default App;
