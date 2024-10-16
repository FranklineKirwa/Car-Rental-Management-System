import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Stay Connected</h3>
        <ul className="footer-links">
          <li><a href="/contacts" className="footer-link">Contact Us</a></li>
          <li><a href="/services" className="footer-link">Services</a></li>
          <li><a href="/recommendations" className="footer-link">Recommendations</a></li>
        </ul>
      </div>
      <div className="footer-details">
        <p>&copy; {new Date().getFullYear()} Car Rental Management System</p>
        <p>Follow us on social media:</p>
        <ul className="social-media">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
