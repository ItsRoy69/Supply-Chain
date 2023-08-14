import React, { useEffect, useState } from "react";
import "./auth.css";

const SignUp = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        You can signin either as retailer or Distributor
      </h1>
      <div className="auth-con">
        <div className="auth-card">
          {/* <img src={Logo} alt="Logo" className="logo" /> */}
          <p className="heading">Signup as Distributor</p>
          <p className="sub-heading">Signup as a Distrbutor</p>
          <br />

          <form className="auth-inp" action="">
            <div className="inp-box">
              <input name="fullname" type="text" placeholder="Name" />
            </div>

            <div className="inp-box">
              <input name="username" type="text" placeholder="User Name" />
            </div>

            <div className="inp-box">
              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
            </div>

            <div className="inp-box">
              <input
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="password"
              />
            </div>

            <div className="inp-box">
              <input
                name="cpassword"
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
              />
            </div>

            <div className="auth-btn nav-btn">Register</div>
          </form>

          <p className="auth-link">
            Already have an account? <a href="/signin">Signin</a>
          </p>
        </div>
        OR
        <div className="auth-card">
          {/* <img src={Logo} alt="Logo" className="logo" /> */}
          <p className="heading">Signup as Retailer</p>
          <p className="sub-heading">Signup as a retailer</p>
          <br />

          <form className="auth-inp" action="">
            <div className="inp-box">
              <input name="fullname" type="text" placeholder="Name" />
            </div>

            <div className="inp-box">
              <input name="username" type="text" placeholder="User Name" />
            </div>

            <div className="inp-box">
              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
            </div>

            <div className="inp-box">
              <input
                name="password"
                type="password"
                placeholder="Password"
                autoComplete="password"
              />
            </div>

            <div className="inp-box">
              <input
                name="cpassword"
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
              />
            </div>

            <div className="auth-btn nav-btn">Register</div>
          </form>

          <p className="auth-link">
            Already have an account? <a href="/signin">Signin</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
