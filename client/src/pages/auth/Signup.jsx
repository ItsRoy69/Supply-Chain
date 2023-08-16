import React, {useState} from "react";
import {Image} from "antd";
import {Button} from "antd";
import authimg from "../../assets/growth.svg";
import "./auth.css";

import {ethers} from "ethers";

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

  // set -> metamaskAccounts
  const [account, setAccount] = useState(null);

  // function -> connectMetamaskWallet
  const handleConnectMetamaskWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask to connect your wallet !");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
      // // console.log(`Connected account : ${account}`);
    } catch (error) {
      console.error("Error connecting MetaMask:", error);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retailerId, setRetailerId] = useState("");
  const [walletAddressInput, setWalletAddressInput] = useState("");

  // function -> sendSignUpDataToDB
  const handleRegistration = async () => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          retailerId,
          walletAddress: account || walletAddressInput,
        }),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error registering:", error);
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
              style={{
                cursor: "pointer",
                padding: "8rem",
                textDecoration: "underline",
              }}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="gmailId">Gmail ID</label>
            <input
              className="connectLayout_registration"
              type="email"
              id="gmailId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              className="connectLayout_registration"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="registeredId">Registered {textTitle} ID</label>
            <input
              className="connectLayout_registration"
              type="text"
              id="registeredId"
              value={retailerId}
              onChange={(e) => setRetailerId(e.target.value)}
              required
            />

            <label htmlFor="address">Metamask Wallet Address</label>
            <input
              className="connectLayout_registration"
              type="address"
              id="walletAddress"
              value={account ? account : walletAddressInput}
              onChange={(e) => setWalletAddressInput(e.target.value)}
            />

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
          {account ? (
            <Button
              className="common-squadButton"
              style={{width: "fit-content", padding: "0rem 3rem"}}
            >
              {/* {account.slice(0, 10) + "..." + account.slice(38, 42)} */}
              Metamask Connected
            </Button>
          ) : (
            <Button
              className="common-squadButton"
              style={{width: "fit-content", padding: "0rem 3rem"}}
              onClick={handleConnectMetamaskWallet}
            >
              Connect Metamask Wallet
            </Button>
          )}
          <p style={{cursor: "pointer", color: "white"}}>
            Already have an account? <a href="/signin">Login</a>
          </p>
          <Button
            className="common-squadButton"
            style={{width: "fit-content", padding: "0rem 3rem"}}
            onClick={handleRegistration}
          >
            Register Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Signup;
