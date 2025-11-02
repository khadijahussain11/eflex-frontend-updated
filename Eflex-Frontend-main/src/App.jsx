import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Header  from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TeamPage from "./pages/TeamPage";
import Portfolio from "./pages/portfolio";   

import GraphicDesign from "./pages/Services/GraphicDesign";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import WebDevelopment from "./pages/Services/WebDevelopment";
import MobileApp from "./pages/Services/MobileApp";
import DomainHosting from "./pages/Services/DomainHosting";
import SEOService from "./pages/Services/SEOService";
import BlogPage from "./pages/BlogPage";

import "./App.css";


export default function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Team Page */}
        <Route path="/TeamPage" element={<TeamPage />} /> 

        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<Portfolio />} />  {/* ✅ FIXED */}

        {/* Services */}
        <Route path="/services/graphic" element={<GraphicDesign />} />
        <Route path="/services/digital" element={<DigitalMarketing />} />
        <Route path="/services/web" element={<WebDevelopment />} />
        <Route path="/services/mobile" element={<MobileApp />} />
        <Route path="/services/domain" element={<DomainHosting />} />
        <Route path="/services/seo" element={<SEOService />} />
      </Routes>

      <Footer />
    </Router>
  );
}
