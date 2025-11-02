import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* ✅ Toggle Button (mobile left) */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* ✅ Logo (center on mobile) */}
      <Link to="/" className="logo">
        <img src={logo} alt="E-Flex Logo" />
      </Link>

      {/* ✅ Nav links */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Services ⬇
          </button>

          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/services/graphic" onClick={() => {setDropdownOpen(false); setMenuOpen(false);}}>Graphic Designing</Link>
              <Link to="/services/digital" onClick={() => {setDropdownOpen(false); setMenuOpen(false);}}>Digital Marketing</Link>
              <Link to="/services/web" onClick={() => {setDropdownOpen(false); setMenuOpen(false);}}>Web Development</Link>
              <Link to="/services/mobile" onClick={() => {setDropdownOpen(false); setMenuOpen(false);}}>Mobile App</Link>
              <Link to="/services/domain" onClick={() => {setDropdownOpen(false); setMenuOpen(false);}}>Domain Hosting</Link>
              <Link to="/services/seo" onClick={() => {setDropdownOpen(false); setMenuOpen(false);}}>SEO Service</Link>
            </div>
          )}
        </div>

       
        <Link to="/Teampage" onClick={() => setMenuOpen(false)}>Team</Link>
         <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

