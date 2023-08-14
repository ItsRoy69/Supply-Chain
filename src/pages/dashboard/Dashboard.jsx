import React, { useEffect, useState } from "react";
import "./dashboard.css";
import searchimg from "../../assets/search.svg";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-main">        
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
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
