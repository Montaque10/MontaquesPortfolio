import React, { useState } from "react";
import './MyWork.css';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import mywork_data from '../../assets/mywork_data.js';

const MyWork = () => {
    const [visibleProjects, setVisibleProjects] = useState(4); 

    const showMoreProjects = () => {
        setVisibleProjects(prev => prev + 4); 
    };

    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.slice(0, visibleProjects).map((work, index) => (
                    <div key={index} className="work-card">
                        <img src={work.image} alt={work.title} className="work-image" />
                        <div className="work-overlay">
                            <div className="work-info">
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                                <div className="work-tech">
                                    {work.technologies && work.technologies.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="work-links">
                                    {work.github && (
                                        <a href={work.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {work.live && (
                                        <a href={work.live} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProjects < mywork_data.length && (
                <div className="mywork-showmore" onClick={showMoreProjects}>
                    <p>Show More</p>
                    <FaArrowRight className="arrow-icon" />
                </div>
            )}
        </div>
    );
};

export default MyWork;