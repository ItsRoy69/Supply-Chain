import React, { useState } from "react";
import { Image } from "antd";
import { Button } from "antd";
import authimg from "../../assets/growth.svg";
import "./auth.css";

const Signup = () => {
  const [displayText, setDisplayText] = useState("Retailer");
  const [textTitle, setTextTitle] = useState("Distributor");

  const handleClick = () => {
    if (displayText === "Retailer") {
      setDisplayText("Distributor");
      setTextTitle("Retailer");
    } else {
      setDisplayText("Retailer");
      setTextTitle("Distributor");
    }
  };

  return (
    <>
      <div className="connectLayout-connectLayoutContainer">
        <div className="connectLayout-left">
          <div className="connectLayout-navContainer">
            <a href="/" className="navbar-logo">
              SQUAD
            </a>
            <h3
              onClick={handleClick}
              style={{ cursor: "pointer", padding: "8rem", textDecoration: "underline" }}
            >
              I want to register as {displayText}
            </h3>
          </div>
          <Image
            src={authimg} // Use 'src' instead of 'image'
            preview={false} // Disable image preview
            alt="Connect Wallet" // Provide alt text for accessibility
          />
        </div>
        <div className="connectLayout-right">
          <h1 className="connectLayout-title">Register as {textTitle}</h1>
          <h4 className="connectLayout-subtitle">
            You need to connect to your crypto wallet to continue
          </h4>{" "}
          <div className="connectLayout_registrationbox">
            <label htmlFor="name">Name</label>
            <input
              className="connectLayout_registration"
              type="text"
              id="name"
              required
            />
            <label htmlFor="gmailId">Gmail ID</label>
            <input
              className="connectLayout_registration"
              type="email"
              id="gmailId"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="connectLayout_registration"
              type="password"
              id="password"
              required
            />
            <label htmlFor="registeredId">Registered {textTitle} ID</label>
            <input
              className="connectLayout_registration"
              type="text"
              id="registeredId"
              required
            />{" "}
            <div className="connectLayout_distributorcheck">
              <label>
                <input
                  className="connectLayout_distributorcheckbox"
                  type="checkbox"
                />{" "}
                Register as {textTitle}
              </label>
            </div>
          </div>
          <Button
            className="common-squadButton"
            style={{ width: "fit-content", padding: "0rem 3rem" }}
          >
            Connect Wallet
          </Button>
          <p style={{ cursor: "pointer", color: "white" }}>
            Already have an account? <a href="/signin">Login</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
