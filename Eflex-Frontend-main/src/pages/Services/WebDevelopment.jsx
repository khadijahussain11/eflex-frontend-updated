import { useState } from "react";
import { motion } from "framer-motion"; 
import "./WebDevelopment.css"

export default function WebsiteServices() {
  const [active, setActive] = useState(null);

  // --- Services Data ---
  const services = [
    {
      title: "Website Development",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721261.png",
      desc: "Eflex-Solution is a leading website development company that specializes in creating custom websites tailored to meet the unique needs of businesses of all sizes."
    },
    {
      title: "Custom Website Development",
      img: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      desc: "We offer custom website development services that are tailored to meet the unique needs of each client. Involves designing and building a website from scratch."
    },
    {
      title: <>Responsive <br /> Design</>,
      img: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
      desc: "We design websites that are fully responsive, meaning they can be accessed on any device, including desktops, laptops, tablets, and smartphones."
    },
    {
      title: "E-commerce Solution",
      img: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
      desc: "Our e-commerce websites are designed to be user-friendly and secure, with features such as shopping carts, payment gateways, and inventory management systems."
    }
  ];

  // --- Website Packages ---
  const websitePlans = [
  {
    name: "Basic",
    price: "10K",
    features: [
      "Single Page Website",
      "Contact Form",
      "Basic Design",
      "Complete Deployment",
      "Source Files Included",
    ],
  },
  {
    name: "Premium",
    price: "15K",
    badge: "Best value",
    features: [
      "5-Page Website",
      "Modern Interactive Design",
      "Hover Effects",
      "Fast Delivery (24–48 hrs)",
      "Dedicated Project Manager",
    ],
  },
  {
    name: "Ultimate",
    price: "30K",
    features: [
      "Unlimited Pages",
      "Fully Custom Design",
      "Responsive Layout",
      "SEO Optimization",
      "Full Ownership & Deployment",
    ],
  },
];

  // --- E-commerce Packages ---
  const ecommercePlans = [
  {
    name: "Basic",
    price: "20K",
    features: [
      "5-Page E-Commerce Website",
      "Theme-Based Design",
      "Payment Integration",
      "Up to 10 Products",
      "Contact Form Included",
      "Source Files Provided",
    ],
  },
  {
    name: "Premium",
    price: "30K",
    badge: "Best value",
    features: [
      "10-Page Custom E-Commerce Website",
      "High-End Design",
      "Up to 50 Products",
      "Payment Integration",
      "Dedicated Project Manager",
      "Source Files Included",
    ],
  },
  {
    name: "Ultimate",
    price: "50K",
    features: [
      "Unlimited Pages & Products",
      "Admin Panel Included",
      "Mobile Responsive Design",
      "Tax & Shipping Calculators",
      "Wishlist Feature",
      "Dedicated Manager & Full Source Files",
    ],
  },
];


  return (
    <div className="website-services">
      {/* Heading */}
      <div className="ws-head">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Website Services
        </motion.h2>
      </div>

      {/* Service Cards */}
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
          >
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Website Pricing Section */}
      <div className="pricing-head">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Website Development Packages
        </motion.h2>
        <p className="sub">Pricing Plans</p>
      </div>

      <div className="pricing-grid">
        {websitePlans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={[
              "price-card",
              plan.badge ? "ribboned" : "",
              plan.badge === "Best value" ? "best" : "",
              active === i ? "active" : "",
            ].join(" ")}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            {plan.badge && <span className="ribbon">{plan.badge}</span>}

            <div className="price-top">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="unit">PKR</span>
              </div>
            </div>

            <ul className="features">
              {plan.features.map((f, j) => (
                <li key={j}>
                  <span className="check">✔</span> {f}
                </li>
              ))}
            </ul>

            <button className="cta">Get Started</button>
          </motion.div>
        ))}
      </div>

      <div className="pricing-head">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          E-commerce Website Packages
        </motion.h2>
        <p className="sub">Pricing Plans</p>
      </div>

      <div className="pricing-grid">
        {ecommercePlans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={[
              "price-card",
              plan.badge ? "ribboned" : "",
              plan.badge === "Best value" ? "best" : "",
              active === i ? "active" : "",
            ].join(" ")}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            {plan.badge && <span className="ribbon">{plan.badge}</span>}

            <div className="price-top">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
              </div>
            </div>

            <ul className="features">
              {plan.features.map((f, j) => (
                <li key={j}>
                  <span className="check">✔</span> {f}
                </li>
              ))}
            </ul>

            <button className="cta">Get Started</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
