import * as React from "react";
import { Link } from "react-router-dom";
var rating = Array(5).fill(500);
function App() {
  return (
    <>
      <Link href="/login">Login</Link>
      <div>
        Abdul Wahib
        {rating[0]}
      </div>
    </>
  );
}

export default App;
