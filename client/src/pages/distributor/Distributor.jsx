import React, { useEffect, useState } from "react";
import "./distributor.css";
import { FeedCard } from "./FeedCard";
import { useNavigate } from "react-router-dom";
import landingIntro from "../../assets/landing-intro.png";
import searchimg from "../../assets/search.svg";
import profile_pic from "../../assets/avatar2.png";
import peer from "../../assets/peer.svg";
import writePost from "../../assets/writePost.svg";

const Distributor = (post) => {
  const navigate = useNavigate();

  // console.log(user);

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="welcome-head">
          <h1>Welcome, Distributor</h1>
        </div>      
        <div className="feed-search">
          <h3>Feed Search</h3>
          <div className="inputbox">
            <div className="inputx">
              <img
                src={searchimg}
                alt="search"
                style={{ borderStyle: "none", verticalAlign: "middle" }}
              />
              <input
                type="text"
                placeholder="Type the skills you are looking for"
              />
            </div>
            <div className="searchbtn">Search</div>
          </div>
          <div className="intro-graphic">
            <img className="intro-right" src={landingIntro} alt="" />
          </div>
        </div>
        <FeedCard post={post} />;
      </div>

      <div className="dashboard-summary">
        <div className="profile">
          <div className="profile-summary">
            <h1>Profile</h1>
            <img src={profile_pic} alt="avatar" className="profile-pic" />
            <p className="username">fullname</p>

            <p className="title">Developer</p>
          </div>

          <div className="profile-stats">
            <div className="profile-card">
              <img src={peer} alt="Peers" className="profileicon" />
              <div className="profilestats">
                <p className="profilecount">12</p>
                <p className="profilecount-sub">Peers</p>
              </div>
            </div>
            <div className="profile-card">
              <img src={writePost} alt="Posts" className="profileicon" />
              <div className="profilestats">
                <p className="profilecount">12</p>
                <p className="profilecount-sub">Posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distributor;
