import logo from "./logo.svg";
import "./App.css";
import "./login";
import { Link } from "react-router-dom";
var rating = Array(5).fill(500);
function App() {
  return (
    <>
      <Link href="/login">Login</Link>
      <div className="App">
        Abdul Wahib
        {rating[0]}
      </div>
    </>
  );
}

export default App;
