import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
import logo from "../../assets/logo.png";



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
        <img src={logo} alt="E-Flex Solutions Logo" className="footer-logo-img" />
        {/* <img src={logo} alt="Eflex" /> */}
          <p>Empowering businesses with technology and innovation.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="http://localhost:5173/">Home</a></li>
            <li><a href="http://localhost:5173/services/graphic">Services</a></li>
            <li><a href="http://localhost:5173/portfolio">Portfolio</a></li>
            <li><a href="http://localhost:5173/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: eflexsolution.11@gmail.com</p>
          <p>Phone: +92 3191298121</p>
          <p>Location: Gulshan-e-Iqbal ,PK Karachi, Pakistan</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/17X2iWFdoV/?mibextid=wwXIfr"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/eflex-solution/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/eflexsolution.11?igsh=dHl6NjM3cmlhMnph"><i className="fa-brands fa-instagram"></i></a>
            {/* <a href="#"><i className="fa-brands fa-twitter"></i></a> */}
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
