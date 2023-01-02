import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [check, setCheck] = useState(0)
  return (
    <div className="App">
      <button onClick={setCheck(prevCheck => prevCheck - 1)}>-</button>
      <span>{check}</span>
      <button onClick={setCheck(prevCheck => prevCheck + 1)}>+</button>
    </div>
  );
}

export default App;
