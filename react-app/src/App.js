import logo from "./logo.svg";
import "./App.css";

var rating = Array(5).fill(500);

function App() {
  return (
    <div className="App">
      Abdul Wahib
      {rating[0]}
    </div>
  );
}

export default App;
