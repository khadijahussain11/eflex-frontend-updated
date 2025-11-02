import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  // ✅ Functions to control hover delay
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); // 200ms delay prevents accidental close
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </button>

      <Link to="/" className="logo">
        <img src={logo} alt="E-Flex Logo" />
        {/* <span className="logo-text">E-Flex</span> */}
      </Link>

      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

        {/* ✅ Dropdown with hover delay */}
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="dropbtn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Services ▾
          </button>

          {dropdownOpen && (
            <motion.div
              className="dropdown-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Link to="/services/graphic">Graphic Designing</Link>
              <Link to="/services/digital">Digital Marketing</Link>
              <Link to="/services/web">Web Development</Link>
              <Link to="/services/mobile">Mobile App</Link>
              <Link to="/services/domain">Domain Hosting</Link>
              <Link to="/services/seo">SEO Service</Link>
            </motion.div>
          )}
        </div>

        <Link to="/Teampage" onClick={() => setMenuOpen(false)}>Team</Link>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/contact" className="contact-btn" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
