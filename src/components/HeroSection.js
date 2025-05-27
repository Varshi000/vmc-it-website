import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css"; // import the CSS file here

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">VMC</span> IT Services
          </h1>
          <p className="hero-subtitle">
            Innovative solutions for your tech and career needs
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="cta-button primary">
              Get Started
            </Link>
            <Link to="/services" className="cta-button secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Tech Solutions"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
