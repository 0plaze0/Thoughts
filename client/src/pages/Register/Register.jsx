import "./Register.scss";

const Register = () => {
  return (
    <div className="app__register">
      <div className="app__register-container">
        <h1>Register</h1>
        <form className="app__register-form">
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
          <button type="button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
