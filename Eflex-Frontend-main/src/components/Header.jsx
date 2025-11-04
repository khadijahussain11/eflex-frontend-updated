import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const dropdownRef = useRef(null);

  // Detect screen width change
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    if (isMobile) setDropdownOpen((prev) => !prev);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Logo */}
      <Link to="/" className="logo" onClick={handleLinkClick}>
        <img src={logo} alt="E-Flex Logo" />
      </Link>

      {/* Mobile menu toggle */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Nav links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>

        {/* Dropdown */}
        <div
          className="dropdown"
          ref={dropdownRef}
          onMouseEnter={() => !isMobile && setDropdownOpen(true)}
          onMouseLeave={() => !isMobile && setDropdownOpen(false)}
        >
          <button className="dropbtn" onClick={toggleDropdown}>
            Services ▾
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                className="dropdown-content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/services/graphic" onClick={handleLinkClick}>
                  Graphic Designing
                </Link>
                <Link to="/services/digital" onClick={handleLinkClick}>
                  Digital Marketing
                </Link>
                <Link to="/services/web" onClick={handleLinkClick}>
                  Web Development
                </Link>
                <Link to="/services/mobile" onClick={handleLinkClick}>
                  Mobile App
                </Link>
                <Link to="/services/domain" onClick={handleLinkClick}>
                  Domain Hosting
                </Link>
                <Link to="/services/seo" onClick={handleLinkClick}>
                  SEO Service
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link to="/teampage" onClick={handleLinkClick}>
          Team
        </Link>
        <Link to="/portfolio" onClick={handleLinkClick}>
          Portfolio
        </Link>
        <Link to="/blog" onClick={handleLinkClick}>
          Blog
        </Link>

        <Link to="/contact" className="contact-btn" onClick={handleLinkClick}>
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
