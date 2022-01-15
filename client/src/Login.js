import React, { useState, useContext } from "react";
import { UserContext } from "./context/User";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          setErrors(user.error);
        } else {
          navigate("/");
          login(user);
        }
      });
  };
  return (
    <div className="form-div">
      <div className="form-box">
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <label>username:</label>
          <input
            className="form-input"
            type="username"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            className="form-input"
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <input className="form-input" type="submit" />
        </form>
      </div>
      {errors}
    </div>
  );
};

export default Login;
