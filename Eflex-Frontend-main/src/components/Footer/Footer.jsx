import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-logo">
          <h2>E-Flex <span>Solutions</span></h2>
          <p>Empowering businesses with technology and innovation.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@eflexsolutions.com</p>
          <p>Phone: +92 333 1234567</p>
          <p>Location: Islamabad, Pakistan</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>© {new Date().getFullYear()} E-Flex Solutions. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
