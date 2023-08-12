import React from 'react';

import './navbar.css'; // Import the CSS module

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <p className="logo">Walmart</p>
      <div className="linkContainer">
        <a href="/" className="navLink">
          home
        </a>
        <a href="/deploy" className="navLink">
          deploy
        </a>
        <a href="/create" className="navLink">
          create
        </a>
        <a href="/explorer" className="navLink">
          explorer
        </a>
      </div>
      <button className="connectButton">
        Connect Wallet
      </button>
    </div>
  );
};

export default Navbar;
