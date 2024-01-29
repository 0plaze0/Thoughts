import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./Layout/Home";
import { CreatePost, Login, Register, Posts, Article } from "./pages";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Posts />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/createPost" element={<CreatePost />} />
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
