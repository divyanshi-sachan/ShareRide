import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./navbar.css";
import {
  SignedOut,
  SignInButton,
  UserButton,
  SignedIn,
  SignUpButton,
} from "@clerk/clerk-react";
// import { width } from "@mui/system";
const Navbar = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/home"); 
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://i.pinimg.com/564x/bb/49/5b/bb495ba3db3be888b6a8b1e8f1ad7e2d.jpg"
          alt="ShareRide Logo"
          className="logo"
        />
        <h1 className="heading">ShareRide</h1>
      </div>
      <div className="navbar-right">
        <SignedOut>
          <SignInButton className="btn signup-btn"  afterSignInUrl="/home"/>
          <SignUpButton className="btn login-btn" afterSignUpUrl = "/home"  />
        </SignedOut>
        <SignedIn>
        <button className="home-btn" onClick={handleRedirect}>
            Home
        </button>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
