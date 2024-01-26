import { Routes, Route } from "react-router-dom";

import "./App.scss";
import { Navbar, Posts } from "./components";
import Home from "./Layout/Home";
import { Login } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<p>Register</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
