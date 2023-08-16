import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logout_logo from "../../assets/logout.png";
import hamburger_logo from "../../assets/hamburger.png";
import fullLogo from "../../assets/codz-full-logo.svg";
import article_logo from "../../assets/article.png";
import hackathon_logo from "../../assets/hackathon.png";
import dashboard_logo from "../../assets/dashboard.png";
import chat_logo from "../../assets/chats.png";
import profile_logo from "../../assets/profile.png";
import help_logo from "../../assets/help.png";
import "./sidebar.css";

const Sidebar = ({ children, setIsLoggedIn, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: dashboard_logo,
    },
    {
      path: "/profile",
      name: "My Profile",
      icon: profile_logo,
    },
    {
      path: "/hackathons",
      name: "Hackathons",
      icon: hackathon_logo,
    },
    {
      path: "/articles",
      name: "Articles",
      icon: article_logo,
    },
    {
      path: "/messages",
      name: "Chats",
      icon: chat_logo,
    },
    {
      path: "/help",
      name: "Help",
      icon: help_logo,
    },
  ];

  return (
    <div className="sidebar-main">
      <motion.div
        animate={{ width: isOpen ? "14%" : "4%" }}
        className="sidebar"
      >
        <div className="sidebar_top" onClick={sidebarToggle}>
          {isOpen && (
            <img src={fullLogo} alt="logo" className="dashboardlogo" />
          )}
          <img src={hamburger_logo} alt="hamburger" className="hamlogo" />
        </div>

        <div className="sidebar_mid">
          {routes.map((route) => {
            return (
              <Link to={route.path} key={route.name}>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  className="sidebar_links"
                >
                  <img
                    src={route.icon}
                    alt={route.name}
                    className="sidebarlink_icon"
                  />
                  {isOpen && <p className="sidebarlink_text">{route.name}</p>}
                </motion.div>
              </Link>
            );
          })}
        </div>
        <div className="sidebar_bottom">
          <img src={logout_logo} alt="logout" />
          {isOpen && <p>Logout</p>}
        </div>
      </motion.div>
      {/* This main will render the individual pages */}
      <main className="dashcontent">{children}</main>
    </div>
  );
};

export default Sidebar;
