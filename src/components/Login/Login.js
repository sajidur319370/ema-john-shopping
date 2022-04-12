import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input onBlur={handlePasswordBlur} type="password" required />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          {loading && <p>loading...............</p>}
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create New account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
