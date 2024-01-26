import "./Login.scss";

const Login = () => {
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
          />
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
