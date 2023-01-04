import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function checkfirst() {
  console.log('checkfirst')
  return 0
}

function App() {
  function decrement() {
    setCheck(prevCheck => prevCheck - 1)
  }
  function increment() {
    setCheck(prevCheck => prevCheck + 1)
  }
  const [check, setCheck] = useState(checkfirst())
  return (
    <div className="App">
       <button onClick={decrement}>-</button>
      <span>{check}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
