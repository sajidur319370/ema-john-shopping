import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/home");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Password didnt match!");
      return;
    }
    if (password.length < 6) {
      setError("password must be  at least 6 character");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input onBlur={handlePasswordBlur} type="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          <input type="submit" className="form-submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
