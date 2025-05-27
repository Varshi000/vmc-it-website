import React from 'react';
import './Contact.css';

const ContactPage = () => {
  const contactInfo = {
    name: "Venkat Prasad",
    role: "Training & Support Coordinator",
    phone: "+91 77020 92556",
    email: "vmcitservices09@gmail.com",
    availability: "Monday to Saturday, 9:00 AM - 6:00 PM IST"
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact VMC IT Services</h1>
          <p className="hero-subtitle">Get in touch with our team for support and inquiries</p>
        </div>
      </section>

      {/* Contact Card */} 
      <section className="contact-card-section">
        <div className="container">
          <div className="contact-card">
            <div className="contact-person">
              <div className="avatar">v</div>
              <div className="person-info">
                <h2>{contactInfo.name}</h2>
                <p className="role">{contactInfo.role}</p>
              </div>
            </div>
            
            <div className="contact-details">
              <div className="detail-item">
                <span className="icon">📞</span>
                <div>
                  <p className="label">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="value">{contactInfo.phone}</a>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="icon">✉️</span>
                <div>
                  <p className="label">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="value">{contactInfo.email}</a>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="icon">🕒</span>
                <div>
                  <p className="label">Availability</p>
                  <p className="value">{contactInfo.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* FAQ Section */}
         
    </div>
  );
};

export default ContactPage;