import React from 'react';
import '../footer/Footer.css';

const Footer = () => (
  <footer className="footer-fixed">
    <span>© {new Date().getFullYear()} Lyric Market. All rights reserved.</span>
  </footer>
);

export default Footer;