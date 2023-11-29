// Header.js
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <header className="header-content">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-12 logo-container text-lg-left text-center mb-3 mb-lg-0">
              <div className="header-logo">
                <span className="logo-text">GEOPHYSICO</span>
              </div>
            </div>
            <div className="col-lg-9 col-12 nav-container text-lg-right text-center mb-3 mb-lg-0">
              <nav>
                <ul className="header-nav justify-content-lg-end justify-content-center">
                  <li className="nav-item"><a className="nav-link" href="index.html"><i className="fas fa-home"></i> Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="services.html"><i className="fas fa-cogs"></i> Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="contact.html"><i className="fas fa-envelope"></i> Contact Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.html"><i className="fas fa-info-circle"></i> About Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;