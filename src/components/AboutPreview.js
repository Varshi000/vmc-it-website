import React from "react";
import { Link } from "react-router-dom";
import "./AboutPreview.css";

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="inline-heading">Who We Are</h2>
            <p>
              VMC IT Services is a dynamic startup founded by experienced
              professionals committed to delivering exceptional tech solutions
              and career support.
            </p>
            <p>
              While we're new as a company, our team brings decades of
              combined expertise to help you navigate the tech landscape with
              confidence.
            </p>
            <Link to="/about" className="read-more">
              Our Vision →
            </Link>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
