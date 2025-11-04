import React, { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./Home.css";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { amount: 0.2, margin: "0px 0px -5% 0px" });

  useEffect(() => {
    if (!aboutRef.current) return;
    const counters = aboutRef.current.querySelectorAll(".counter");
    if (prefersReducedMotion) {
      counters.forEach((c) => {
        const target = +c.getAttribute("data-target");
        c.textContent = `${target}+`;
      });
      return;
    }
    if (aboutInView) {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const startVal = 0;
        const duration = 1200;
        const startTime = performance.now();

        const tick = (now) => {
          const t = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = Math.floor(startVal + (target - startVal) * eased);
          counter.textContent = val.toString();
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            counter.textContent = `${target}+`;
          }
        };
        requestAnimationFrame(tick);
      });
    } else {
      counters.forEach((c) => (c.textContent = "0"));
    }
  }, [aboutInView, prefersReducedMotion]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="home-root">
      {/* HERO */}
      <motion.section className="hero section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={fadeUp}>
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Empowering Businesses with <span className="accent">Innovative Software</span></h1>
            <p>Scalable, secure, and cutting-edge digital solutions for your success.</p>
            <div className="hero-buttons">
              <a href="/contact" className="btn btn-primary">Get Started</a>
              <a href="/blog" className="btn btn-outline">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="hero-illustration.jpg" alt="Software Solutions Illustration" />
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section id="about" ref={aboutRef} className="about section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
        <div className="container about-inner">
          <div className="about-image">
            <img src="team.jpg" alt="Our Team" />
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p>We are a passionate team dedicated to delivering innovative and scalable software solutions for businesses worldwide. Our mission is to empower organizations with technology that drives success.</p>

            <div className="stats">
              <div className="stat">
                <div className="counter" data-target="10">0</div>
                <div className="label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="counter" data-target="500">0</div>
                <div className="label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="counter" data-target="50">0</div>
                <div className="label">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container about-cards">
          {[
            { img: "mission1.jpg", title: "Our Mission", text: "To deliver scalable, innovative solutions that help businesses grow and thrive in the digital world." },
            { img: "vision1.jpg", title: "Our Vision", text: "To empower organizations globally with cutting-edge technology that drives impact." },
            { img: "values1.jpg", title: "Our Values", text: "Innovation, integrity, and teamwork are at the heart of everything we do." },
          ].map((card, idx) => (
            <motion.div key={idx} className="card info-card" initial="hidden" whileInView="visible" variants={fadeUp}>
              <img src={card.img} alt={card.title} />
              <div className="info-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section className="why-choose section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="card-grid">
            {[
              { title: "Fast Delivery", text: "Agile processes ensure your projects are delivered on time without sacrificing quality." },
              { title: "Secure Solutions", text: "We follow enterprise-grade security standards to keep your data safe and protected." },
              { title: "Innovative Tech", text: "Our team leverages the latest technologies to build scalable and future-ready solutions." },
              { title: "Dedicated Support", text: "Enjoy 24/7 customer support to keep your business running smoothly at all times." }
            ].map((item, idx) => (
              <motion.div key={idx} className="card feature-card" initial="hidden" whileInView="visible" variants={fadeUp}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section id="services" className="services section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
        <div className="container">
          <h2>Services</h2>
          <div className="services-container">
            <div className="services-list">
              {[
                { title: "Web Development", description: "Modern, scalable, and responsive websites." },
                { title: "Graphic Designing", description: "Creative visuals that tell your brand’s story." },
                { title: "SEO Services", description: "Boost your search rankings and visibility." },
                { title: "Digital Marketing", description: "Strategies that grow your online presence." }
              ].map((svc, idx) => (
                <motion.div key={idx} className="service-item" initial="hidden" whileInView="visible" variants={fadeUp}>
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="services-preview">
              <img src="services-img.jpg" alt="Services Overview" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CUSTOMER REVIEWS */}
      <motion.section id="reviews" className="reviews section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
        <div className="container">
          <h2>Customer Reviews</h2>
          <div className="reviews-grid">
            {[
              { id:1, name:"Sara Khan", title:"CEO, Company", review:"Outstanding experience with Eflex Solution. The team is highly professional, delivered my project on time, and provided great after-sales support.", image:"https://i.pravatar.cc/100?img=5" },
              { id:2, name:"Ahmed Ali", title:"HR, Company", review:"I am impressed with their web development expertise. They turned my ideas into a functional and modern website. Excellent communication throughout the process.", image:"https://i.pravatar.cc/100?img=8" },
              { id:3, name:"Owais Qadri", title:"Owner, Zan Food", review:"From design to development, everything was handled smoothly. The support team is very responsive and helpful.", image:"https://i.pravatar.cc/100?img=7" }
            ].map((r) => (
              <motion.div key={r.id} className="review-card" initial="hidden" whileInView="visible" variants={fadeUp}>
                <div className="review-head">
                  <img src={r.image} alt={r.name} />
                  <div className="review-meta">
                    <strong>{r.name}</strong>
                    <div className="muted">{r.title}</div>
                  </div>
                </div>
                <p className="review-text">“{r.review}”</p>
                <div className="stars">★★★★★</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CONTACT CTA */}
      <motion.section id="contact" className="contact-cta section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={fadeUp}>
        <div className="container contact-inner">
          <h2>Let's build something great together</h2>
          <p>Tell us about your project — we’ll reply within 24 hours with a plan and estimate.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Contact Us</a>
            <a href="/portfolio" className="btn btn-outline">See Work</a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
