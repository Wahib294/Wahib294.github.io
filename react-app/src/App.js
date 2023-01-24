import * as React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginPage } from "./login";
import AsyncAwait from "./user";
import Edit from "./edit";

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
        <Route path="edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
