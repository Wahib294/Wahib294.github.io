import * as React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./login";
import AsyncAwait from "./user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to="/login">Login</Link>
              <AsyncAwait />
            </>
          }
        />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
