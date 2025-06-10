import React, { useState } from "react";
import './NavBar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="navBar">
      <div className="logo-container">
        <span className="logo-text">MP</span>
        <span className="logo-dot">.</span>
      </div>
      
      <ul className="nav-menu">
        <li className={activeMenu === "home" ? "active" : ""}>
          <div 
            className="anchor-link" 
            onClick={() => {
              handleMenuClick("home");
              scrollToTop();
            }}
            style={{cursor: 'pointer'}}
          >
            Home
          </div>
        </li>
        <li className={activeMenu === "about" ? "active" : ""}>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#about"
            onClick={() => handleMenuClick("about")}
          >
            About Me
          </AnchorLink>
        </li>
        <li className={activeMenu === "service" ? "active" : ""}>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#services"
            onClick={() => handleMenuClick("service")}
          >
            Services
          </AnchorLink>
        </li>
        <li className={activeMenu === "work" ? "active" : ""}>
          <div 
            className="anchor-link" 
            onClick={() => {
              handleMenuClick("work");
              scrollToTop();
            }}
            style={{cursor: 'pointer'}}
          >
            Portfolio
          </div>
        </li>
        <li className={activeMenu === "contact" ? "active" : ""}>
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#contact"
            onClick={() => handleMenuClick("contact")}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      
      <div className="nav-right">
        <div className="social-icons">
          <a 
            href="https://github.com/Montaque10" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          <a 
            href="https://www.linkedin.com/in/montaque-paulse-932a92a3/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
        <div 
          className="nav-connect"
          onClick={() => handleMenuClick("contact")}
        >
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#contact"
          >
            Contact with me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
