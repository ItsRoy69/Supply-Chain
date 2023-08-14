import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="footer-title">Walmart</h2>
      <p className="footer-description">
        Walmartt is currently built for Flow Hackathon S2 and should be used at
        your own risk. We take security seriously and our contracts have been
        thoroughly tested and formally verified but bugs may still exist.
      </p>

      <div className="footer-info">
        <p className="footer-copyright">&#169; 2023 Walmart.</p>
        <ul className="footer-links">
          <li className="footer-link-item">Home</li>
          <li className="footer-link-item">Explorer</li>
          <li className="footer-link-item">Deploy</li>
          <li className="footer-link-item">Create</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
