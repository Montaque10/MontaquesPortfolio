import React from "react";
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-logo">
                        <span className="logo-text">MP</span>
                        <span className="logo-dot">.</span>
                    </div>
                    <p>I am a fullstack developer from RSA with 6 years of experience</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-social-icons">
                        <a href="https://www.linkedin.com/in/montaque-paulse-932a92a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Montaque10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="footer-divider"/>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>©️ {new Date().getFullYear()} Montaque Paulse. All rights reserved.</p>
                </div>
                <div className="footer-bottom-right">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;