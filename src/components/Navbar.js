import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="portfolio-navbar">
      <div className="nav-container">
        {/* Left: Name */}
        <p className="nav-name">SREELATHA</p>

        {/* Right: Hamburger menu for mobile and full menu for desktop */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <div
          className={`nav-links ${isMobileMenuOpen ? "mobile-menu" : ""}`}
          onClick={() => setMobileMenuOpen(false)} // Close menu on link click
        >
          <p>
            <Link className="nav-text" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="nav-text" to="/projects">
              Projects
            </Link>
          </p>
          <p>
            <Link className="nav-text" to="/certifications">
              Certifications
            </Link>
          </p>
          <p>
            <Link className="nav-text" to="/about">
              About
            </Link>
          </p>
          <p>
            <Link className="nav-text" to="/contactme">
              Contact Me
            </Link>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
