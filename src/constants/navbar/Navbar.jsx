import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css"; // Import the CSS module

const Navbar = () => {
  const [isSignupPage, setIsSignupPage] = useState(true);
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";
  const isDashboardLink = window.location.pathname === '/dashboard';

  return (
    <div className="navbarContainer">
      <a href="/" className="logo">
        Walmart
      </a>
      <div className="linkContainer">
        <a href="/" className="navLink">
          home
        </a>
        <a href="/deploy" className="navLink">
          deploy
        </a>
        <a href="/create" className="navLink">
          create
        </a>
        <a href="/explorer" className="navLink">
          explorer
        </a>
      </div>
      <div>
        <Link to={isSignUpPage ? "/signin" : "/signup"}>
          <button
            className="connectButton"
            onClick={() => {
              if (isDashboardLink) {
                // Handle logout action
              } else {
                setIsSignupPage(!isSignupPage); // Toggle between signup and signin
              }
            }}
          >
            {isDashboardLink ? "Logout" : isSignupPage ? "Signin" : "Signup"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
