import { motion } from "framer-motion";
import "./portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A modern shopping platform with cart, login, and payment gateway using Node.js and MongoDB.",
      img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/khadijahussain11/ecommerce-project",
    },
    {
      title: "Portfolio Website",
      desc: "A dark-themed, animated personal portfolio highlighting skills, projects, and contact info.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://khadijahussain11.github.io/my-portfolio/",
    },
    {
      title: "LMS Portal",
      desc: "A learning management system with sign-up/login and responsive dashboard interface.",
      img: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
      tech: ["React", "Express", "MongoDB"],
      link: "https://github.com/khadijahussain11/lms-portal",
    },
    {
      title: "QR Code Generator",
      desc: "Generates custom QR codes for URLs and text with download functionality.",
      img: "https://cdn-icons-png.flaticon.com/512/4697/4697269.png",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/khadijahussain11/qr-code-generator",
    },
  ];

  return (
    <section className="portfolio-page">
      <motion.div
        className="portfolio-head"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h1>Our Portfolio</h1>
        <p>
          Explore our creative work — from dynamic web applications to full-stack projects
          that bring ideas to life.
        </p>
      </motion.div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <motion.div
            className="portfolio-card"
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 150, 255, 0.3)" }}
          >
            <img src={p.img} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div className="tech-tags">
              {p.tech.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>

            <a href={p.link} target="_blank" rel="noopener noreferrer" className="view-btn">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
