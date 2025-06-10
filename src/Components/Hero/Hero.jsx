import React from "react";
import './Hero.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
    return (
        <div className="hero">
            <img src={profile} alt="Profile" />
            <h1><span>I'm Montaque Paulse,</span> a Full Stack Developer based in South Africa</h1>
            <p>Full-Stack Developer with a passion for building scalable, high-performance web applications.📚 Certified in Meta Front-End (React, HTML, CSS, JavaScript), Meta Back-End (Python, Django, APIs), and Google Cloud.🚀 Focused on creating seamless user experiences and efficient backend systems.</p>
            <div className="hero-actions">
                <AnchorLink 
                    className="hero-connect anchor-link" 
                    offset={50} 
                    href="#contact"
                >
                    Connect with me
                </AnchorLink>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
} 

export default Hero;