import { useState } from "react";
import { motion } from "framer-motion";
import "./DigitalMarketing.css"; // 👈 new CSS file

export default function DigitalMarketing() {
  const [active, setActive] = useState(null);

  const services = [
    {
      title: "Digital Marketing Company",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      desc: "We help businesses grow their digital presence through strategic marketing, SEO, paid ads, and analytics-driven campaigns that convert.",
    },
    {
      title: "Search Engine Marketing",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
      desc: "Boost your visibility on search engines using PPC and keyword optimization — helping your business reach the right customers faster.",
    },
    {
      title: "Social Ads",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135712.png",
      desc: "Engage your audience with targeted ad campaigns on Facebook, Instagram, and LinkedIn designed for conversions and reach.",
    },
    {
      title: "Social Media Marketing",
      img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
      desc: "We manage, create, and grow your brand across all major social platforms with consistency, creativity, and strategy.",
    },
    {
      title: "Advertising Audit",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135807.png",
      desc: "We analyze your current ad performance and provide expert insights to improve ROI and targeting effectiveness.",
    },
  ];

  const plans = [
    {
      name: "Weekly Package",
      price: "5K",
      features: [
        "Facebook Boosting",
        "Targeted audience",
        "High Reach & Engagement",
        "Page SEO Optimization",
        "7-Day Active Campaign",
        "Dedicated Project Manager",
        "24/7 Support",
      ],
    },
    {
      name: "15 Days Work",
      price: "15K",
      features: [
        "Facebook Boosting",
        "Targeted audience",
        "Higher Conversions",
        "Complete Page SEO (High Rank)",
        "15-Day Campaign",
        "Project Manager + Reporting",
        "100% Satisfaction Guarantee",
      ],
    },
    {
      name: "Monthly Package",
      price: "30K",
      features: [
        "Facebook + WhatsApp Marketing",
        "Nationwide Targeting",
        "High Reach & CTR",
        "30-Day Active Management",
        "Dedicated Manager + Analytics",
        "Money Back Guarantee",
      ],
    },
  ];

  return (
    <div className="digital-page">
      {/* ===== PAGE HEADER ===== */}
      <section className="digital-header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Digital Marketing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Empower your business with high-performing marketing campaigns designed for impact.
        </motion.p>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Marketing Services
        </motion.h2>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="icon-circle">
                <img src={s.img} alt={s.title} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="pricing-section">
        <div className="pricing-head">
          <h2>Our Packages</h2>
          <p>Flexible plans designed to fit your marketing needs.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`price-card ${plan.badge ? "highlight" : ""} ${
                active === i ? "active" : ""
              }`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {plan.badge && <span className="badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button className="cta">Get Started</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
