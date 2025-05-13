import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone (optional)" />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h3>Direct Contact</h3>
        <p>Email: contact@vmcit.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;