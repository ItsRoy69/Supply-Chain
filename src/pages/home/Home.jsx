import React from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { BsArrowRightShort } from "react-icons/bs";

import about1 from "../../assets/about1.svg";
import about2 from "../../assets/about2.svg";
import about3 from "../../assets/about3.svg";
import about4 from "../../assets/about4.svg";
import about5 from "../../assets/about5.svg";
import circle from "../../assets/circle.svg";

import "./home.css"; // Import the CSS file

const Home = () => {
  return (
    <>
      <section className="header-container">
        <p className="subtext">Welcome to Walmart</p>
        <p className="main-text">
          Create your contracts <br /> on{" "}
          <span className="highlighted-text">WALMART</span>
        </p>
        <button className="cta-button">
          <p className="cta-text">Get Started</p>
          <HiMiniArrowSmallRight size={35} />
        </button>
      </section>

      <section className="body-container">
        <div className="flexContainer">
          <div className="leftColumn">
            <div className="infoBox">
              <p className="title">
                An unique concept of creating smartcontracts with AI!
              </p>
              <p className="description2">
                Forget about writing hectic code! Create contracts with simple
                prompts and enjoy the beauty of our platform
              </p>

              <img
                src={about1}
                height={300}
                width={300}
                alt="Create contract"
                className="image"
              />
            </div>
            <div className="infoBoxDark">
              <img
                src={about4}
                alt="image"
                height={40}
                width={60}
                className="imageSmall"
              />

              <p className="subtitle">Already have a contract? Deploy here</p>
              <p className="description">
                Have a pre-written contract in cadence and struggling to deploy?
                Use our dapp for easy deployment and management!
              </p>

              <p
                onClick={() => {
                  router.push("/deploy");
                }}
                className="link"
              >
                Deploy here{" "}
                <span>
                  <BsArrowRightShort size={25} />
                </span>
              </p>
            </div>
          </div>

          <div className="rightColumn">
            <div className="infoBoxDark">
              <img
                src={about3}
                alt="image"
                height={40}
                width={60}
                className="imageSmall"
              />

              <p className="subtitle">Create contracts on cadence with AI.</p>
              <p className="description">
                building on flow? Struggling with cadence? Use our dapp to build
                and deploy contracts using <strong>GPT3</strong>!
              </p>

              <p
                onClick={() => {
                  router.push("/create");
                }}
                className="link"
              >
                Try here{" "}
                <span>
                  <BsArrowRightShort size={25} />
                </span>
              </p>
            </div>
            <div className="infoBox">
              <img
                src={about2}
                height={250}
                width={250}
                alt="Create contract"
                className="imageCentered"
              />

              <div className="infoBoxRight">
                <p className="title">
                  Deploying contracts with scripts and CLI is too hectic?
                </p>
                <p className="description2">
                  Use walmart's deployer to deploy your smartcontracts in a
                  breeze and embrace the power of our dapp!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fullWidthBox">
          <div className="infoBoxDarkCentered">
            <img
              src={about5}
              alt="image"
              height={40}
              width={60}
              className="imageSmall"
            />

            <p className="subtitle">
              Manage your existing contracts with our very own explorer!
            </p>
            <p className="description">
              Deployed contracts with our platform? Just simply search your
              address on explorer and get all the deployed contracts at a single
              place!
            </p>

            <p
              onClick={() => {
                router.push("/explorer");
              }}
              className="link"
            >
              Use Explorer{" "}
              <span>
                <BsArrowRightShort size={25} />
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="banner-section">
        <div className="banner-content">
          <p className="banner-title">Manage contracts !</p>

          <p className="banner-text">
            Create, deploy and manage smart contracts with our most unique yet
            feature-rich dapp. Never used AI before? It's nothing! Just try and
            fall in love with it!
          </p>

          <p className="banner-start">Let's Get Started</p>
        </div>

        <div className="banner-image-container">
          <img
            src={circle}
            height={800}
            width={800}
            alt="circle"
            className="absolute -top-28 -right-20 animate-spin-slow animate-spin-extraSlow"
          />

          <p className="banner-logo-text">WM</p>
        </div>
      </section>
    </>
  );
};

export default Home;
