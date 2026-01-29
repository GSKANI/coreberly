import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', projectType: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-layout">
          {/* Left Side: Form */}
          <motion.section
            className="contact-form-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="form-title">Send Us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <input
                  type="text"
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  placeholder="e.g., Smart Contract, dApp, DeFi Solution"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </motion.section>

          {/* Right Side: Info */}
          <motion.section
            className="contact-info-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-header">
              <h2>Contact Information</h2>
              <p>Have a project in mind or want to learn more about our solutions? Reach out to us through any of the channels below.</p>
            </div>

            <div className="contact-info-cards">
              <div className="minimal-info-card">
                <div className="minimal-icon">✉️</div>
                <div className="minimal-details">
                  <h4>Email</h4>
                  <p>coreberly@gmail.com</p>
                </div>
              </div>

              <div className="minimal-info-card">
                <div className="minimal-icon">📍</div>
                <div className="minimal-details">
                  <h4>Location</h4>
                  <p>Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="connect-section">
              <h3>Connect With Us</h3>
              <div className="minimal-social-icons">
                <a href="#!" className="social-icon">𝕏</a>
                <a href="https://www.linkedin.com/in/coreberly-a820713a9/" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
                <a href="#!" className="social-icon">⚙️</a>
              </div>
            </div>

            <div className="minimal-cta-card">
              <div className="minimal-cta-content">
                <h3>Start a New Project</h3>
                <p>Ready to bring your vision to life? We're here to help you every step of the way.</p>
              </div>
              <button className="minimal-cta-btn">↑</button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
