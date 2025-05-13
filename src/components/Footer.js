import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} VMC IT Services. All rights reserved.</p>
      <p>Email: contact@vmcit.com | Phone: (123) 456-7890</p>
    </footer>
  );
};

export default Footer;