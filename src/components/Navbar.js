import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          Coreberly
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><a href="/#team" onClick={() => setIsMenuOpen(false)}>Team</a></li>
          <li><a href="/#pricing" onClick={() => setIsMenuOpen(false)}>Courses</a></li>
          <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
          <li className="mobile-only"><Link to="/contact" className="nav-cta-mobile" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
        </ul>

        <Link to="/contact" className="nav-cta-desktop">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
