import React from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import { BsArrowRightShort } from "react-icons/bs";

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
      
      
      <section className="about-section">
      <div className="flex about-container-left mx-auto mt-20 gap-10">
        {/* Left */}
        <div className="about-container-left">
          <div className="about-left-item">
            <p className="about-left-title">
              An unique concept of creating smartcontracts with AI!
            </p>
            <p className="about-left-text">
              Forget about writing hectic code! Create contracts with simple prompts and enjoy the beauty of our platform
            </p>

            <img
              src="/about7.svg"
              height={300}
              width={300}
              alt="Create contract"
              className="about-left-image"
            />
          </div>
          <div className="about-right-item">
            {/* ... Rest of the code ... */}
          </div>
        </div>

        {/* Right */}
        <div className="about-container-right">
          <div className="about-right-item">
            {/* ... Rest of the code ... */}
          </div>
          <div className="about-left-item">
            {/* ... Rest of the code ... */}
          </div>
        </div>
      </div>

      {/* Explorer section */}
      <div className="w-[80%] mx-auto">
        <div className="about-explorer">
          {/* ... Rest of the code ... */}
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
