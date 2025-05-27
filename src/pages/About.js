import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>Welcome to VMC IT Services</h1>
          <p className="hero-subtitle">Your complete career support partner</p>
        </div>
      </section>

      {/* Primary Services Section */}
      <section className="primary-services">
        <div className="container">
          <h2>Our Core Offerings</h2>
          <div className="services-container-about">
            <div className="service-card-about">
              <div className="service-number">01</div>
              <h3>Comprehensive Job Support</h3>
              <ul>
                <li>Interview preparation with mock sessions</li>
                <li>Technical assignment assistance</li>
                <li>24/7 on-the-job support</li>
              </ul>
            </div>
            
            <div className="service-card-about">
              <div className="service-number">02</div>
              <h3>Technology Training</h3>
              <ul>
                <li>Hands-on training for all technologies</li>
                <li>Real-world project experience</li>
                <li>Certification guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Services Section */}
      <section className="secondary-services">
        <div className="container">
          <h2>Additional Support Services</h2>
          <div className="services-grid">
            <div className="support-card">
              <h3>Proxy Solutions</h3>
              <p>Secure, reliable proxies for professional needs</p>
            </div>
            
            <div className="support-card">
              <h3>Document Services</h3>
              <p>Resume editing and professional profile optimization</p>
            </div>
            
            <div className="support-card">
              <h3>US Job Applications</h3>
              <p>We handle job applications on your behalf</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-proposition">
        <div className="container">
          <h2>Why VMC Stands Out ? </h2>
          <div className="value-features">
            <div className="value-item">
              <h3>Industry Experts</h3>
              <p>Our team consists of seasoned IT professionals</p>
            </div>
            
            <div className="value-item">
              <h3>US Market Specialization</h3>
              <p>Deep understanding of American job requirements</p>
            </div>
            
            <div className="value-item">
              <h3>End-to-End Support</h3>
              <p>From training to job placement assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;