import React from "react";
import './Services.css';
import Service_data from '../../assets/Service_data.js';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Service_data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.id}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;