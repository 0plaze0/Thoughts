import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await api.post(
        "/login",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      );
      if (result.status === 200) {
        alert("User register succesfully");
      } else alert("wrong credentials");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="app__login">
      <div className="app__login-container">
        <h1>Login</h1>
        <form className="app__login-form">
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
