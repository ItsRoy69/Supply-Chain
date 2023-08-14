import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import "./auth.css";


const SignIn = () => {
  return (
    <>
      <div className="auth-con">
        <div className="auth-card">
          <p className="heading">Welcome back</p>
          <br />

          <form className="auth-inp" action="">
            <div className="inp-box">
              <input name="email" placeholder="Email" type="email" />
            </div>

            <div className="inp-box">
              <input
                name="password"
                autoComplete="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </form>

          <div className="auth-btn nav-btn">Signin</div>

          <p className="auth-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
