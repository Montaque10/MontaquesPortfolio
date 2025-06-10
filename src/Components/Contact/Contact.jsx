import React from "react";
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "fe202fbd-98fb-495b-83cd-dba8a9effad7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                alert("Message sent successfully");
                event.target.reset();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Have a project in mind? Let's get in touch and make it happen.</p>
                    
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FaEnvelope className="contact-icon" />
                            <p>montaque.paulse@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FaPhoneAlt className="contact-icon" />
                            <p>+27 82 123 4567</p>
                        </div>
                        <div className="contact-detail">
                            <FaMapMarkerAlt className="contact-icon" />
                            <p>Port Elizabeth, South Africa</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Enter your name" 
                        name="name"
                        required 
                    />
                    
                    <label htmlFor="email">Your Email</label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="Enter your email" 
                        name="email"
                        required 
                    />
                    
                    <label htmlFor="message">Write your message</label>
                    <textarea 
                        id="message"
                        name="message"   
                        rows="8" 
                        placeholder="Enter your message"
                        required
                    ></textarea>
                    
                    <button type="submit" className="contact-submit">
                        Submit Now
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;