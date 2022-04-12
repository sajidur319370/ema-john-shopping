import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav-container">
        <Link to="/home">Home</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/order">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        {user ? (
          <button onClick={handleSignOut}>SignOut</button>
        ) : (
          <Link to="/signup">Sign Up</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
