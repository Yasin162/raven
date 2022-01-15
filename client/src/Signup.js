import React, { useState, useContext } from "react";
import { UserContext } from "./context/User";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const { signup } = useContext(UserContext);

  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then(res => res.json())
      .then(user => {
        if (!user.errors) {
          signup(user);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
          setPasswordConfirmation("");
          const errorsList = user.errors.map(e => <li key={e}>{e}</li>);
          setErrors(errorsList);
        }
      });
  };
  return (
    <div className="form-div">
      <h1 className="form-title">Signup</h1>
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
        <label>Confirm password:</label>
        <input
          className="form-input"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <input className="form-input" type="submit" />
      </form>
      {errors}
    </div>
  );
};

export default Signup;
