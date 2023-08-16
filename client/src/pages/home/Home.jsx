import React from "react";
import { Image } from "antd";
import heroimg from "../../assets/hero.svg";
import belowimg from "../../assets/network.svg";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-homePageContainer">
        <div className="home-heroSection">
          <div className="home-homePageContainer-left">
            <div className="home-homePageContainer-left-title">
              Collaborating with your Team Made Easier.
            </div>
            <div className="home-homePageContainer-left-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eget libero fringilla arcu aliquam commodo. Ut consectetur dapibus
              dolor.
            </div>
          </div>
          <div className="home-homePageContainer-right">
            <Image preview={false} src={heroimg} className="home-heroimg" />
          </div>
        </div>

        <div className="home-featuresSection">
          <h1 className="home-featuresTitle">
            Store and Share Encrypted Files with your team seamlessly on
            decentralized network.
          </h1>
          <Image
            preview={false}
            src={belowimg}
            className="home-feature-network-img"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
