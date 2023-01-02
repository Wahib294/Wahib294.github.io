import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [check, setcheck] = useState(0)
  return (
    <div className="App">
      <button onClick={() => setcheck(check - 1)}>-</button>
      <span>{check}</span>
      <span>{prevcheck}</span>
      <button onClick={() => setcheck(check + 1)}>+</button>
    </div>
  );
}

export default App;
