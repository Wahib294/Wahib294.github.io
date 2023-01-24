import * as React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to="/login">Login</Link>
              <div>Abdul Wahib</div>
            </>
          }
        />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
