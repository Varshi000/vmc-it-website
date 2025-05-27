import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // We'll create this CSS file

const Footer = () => {
  return (
    <section className="footer-cta">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Begin Your Journey?</h2>
        <p className="cta-subtitle">Connect with our team of experts today</p>
        <Link to="/contact" className="cta-button cta-primary">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Footer;