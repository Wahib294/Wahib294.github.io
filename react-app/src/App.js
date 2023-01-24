import logo from "./logo.svg";
import "./App.css";

var rating = Array(5).fill(500);

function App() {
  return (
    <div className="App">
      Abdul Wahib
      <button onClick={increment}>+</button>
      {rating[0]}
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
