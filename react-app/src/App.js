import logo from "./logo.svg";
import "./App.css";
import "./login";
var rating = Array(5).fill(500);

function App() {
  return (
    <>
      <login></login>
      <div className="App">
        Abdul Wahib
        {rating[0]}
      </div>
    </>
  );
}

export default App;
