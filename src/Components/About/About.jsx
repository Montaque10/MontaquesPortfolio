import React from "react";
import './About.css';
import { FaUserTie, FaCode, FaRobot, FaChartLine } from 'react-icons/fa';
import profile1 from '../../assets/profile1.jpg';

const About = () => {
    return (
        <div id="about" className="about"> 
           <div className="about-title">
                <div className="dynamic-icon">
                    <FaUserTie className="main-icon" />
                    <FaCode className="floating-icon code-icon" />
                    <FaRobot className="floating-icon robot-icon" />
                    <FaChartLine className="floating-icon chart-icon" />
                </div>
                <h1>About Me</h1>
           </div>
           <div className="about-section">
                <div className="about-left">
                    <img src={profile1} alt="Montaque Paulse" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I’m Montaque Paulse, a passionate and driven creative technologist with a strong foundation in full-stack web development, UI/UX design, and autonomous systems. With a sharp eye for clean design and a deep commitment to functionality, I bring ideas to life through scalable, responsive, and user-focused digital experiences.</p>
                        <p>Whether I’m building dynamic applications with React and Django or exploring the edge of AI and automation, I’m always learning, refining, and pushing the boundaries of what’s possible. I thrive in collaborative environments and believe in delivering work that’s not just functional—but exceptional.</p>
                        <p>When I’m not coding, designing, or trading markets, you’ll find me crafting purpose-driven projects that merge creativity and technology for real-world impact.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                        <div className="about-skill"><p>Typescript & JavaScript</p><hr style={{width: "95%"}}/></div>
                        <div className="about-skill"><p>React & Azure</p><hr style={{width: "90%"}}/></div>
                        <div className="about-skill"><p>Python & Django</p><hr style={{width: "80%"}}/></div>
                        <div className="about-skill"><p>Google Cloud & Firebase</p><hr style={{width: "70%"}}/></div>
                        <div className="about-skill"><p>UI/UX Design</p><hr style={{width: "80%"}}/></div>
                        <div className="about-skill"><p>AI & Automation</p><hr style={{width: "75%"}}/></div>
                        <div className="about-skill"><p>Trading & Market Analysis</p><hr style={{width: "95%"}}/></div>
                        <div className="about-skill"><p>Agile & Scrum</p><hr style={{width: "45%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About;