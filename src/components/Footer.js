import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-brand">Coreberly</h3>
          <p className="footer-description">A technology solutions company specializing in innovation, cloud infrastructure, and tech education.</p>
          <div className="footer-social">
            <a href="#!" target="_blank" rel="noopener noreferrer" title="Twitter">X</a>
            <a href="https://www.linkedin.com/in/coreberly-a820713a9/" target="_blank" rel="noopener noreferrer" title="LinkedIn">LinkedIn</a>
            <a href="#!" target="_blank" rel="noopener noreferrer" title="GitHub">GitHub</a>
            <a href="#!" target="_blank" rel="noopener noreferrer" title="Facebook">Facebook</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Web Development</Link></li>
            <li><Link to="/services">Mobile Development</Link></li>
            <li><Link to="/services">Cloud & DevOps</Link></li>
            <li><Link to="/services">AI & Machine Learning</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Learning</h4>
          <ul>
            <li><a href="/#pricing">Tech Education</a></li>
            <li><a href="/#pricing">Bootcamps</a></li>
            <li><a href="/#pricing">Corporate Training</a></li>
            <li><a href="/#pricing">Certifications</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><Link to="/#team">Team</Link></li>
            <li><Link to="/#testimonials">Testimonials</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Coreberly. All rights reserved.</p>
        <div className="footer-links">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Service</a>
          <a href="#!">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
