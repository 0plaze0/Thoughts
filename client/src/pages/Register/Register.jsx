import { useState } from "react";

import "./Register.scss";
import { api } from "../../services/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await api.post("/register", {
        username: username,
        password: password,
      });
      if (result.status === 200) alert("User register succesfully");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="app__register">
      <div className="app__register-container">
        <h1>Register</h1>
        <form className="app__register-form" onSubmit={handleSubmit}>
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
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
