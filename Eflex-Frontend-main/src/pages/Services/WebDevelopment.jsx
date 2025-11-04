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
        "Contact/Query Form",
        "Unlimited Revisions",
        "Complete Source Files",
        "Complete Deployment",
        "1 Banner Design",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "Premium",
      price: "15K",
      badge: "Best value",
      features: [
        "5 Pages Website",
        "Hover Effects",
        "24 to 48 hours TAT",
        "Unlimited Revisions",
        "Complete Source Files",
        "Complete Deployment",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "Ultimate",
      price: "30K",
      features: [
        "Unlimited Pages Website",
        "Complete Source Files",
        "Complete Deployment",
        "Complete W3C Certified HTML",
        "Value Added Services",
        "Dedicated Project Manager",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
  ];

  // --- E-commerce Packages ---
  const ecommercePlans = [
    {
      name: "Basic",
      price: "20K",
      features: [
        "5 Pages E-Commerce Website",
        "Contact/Query Form",
        "Theme Based Design",
        "Payment Module Integration",
        "Sign up Checkout",
        "Up to 10 Products",
        "Up to 3 Categories",
        "Complete Source Files",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "Premium",
      price: "30K",
      badge: "Best value",
      features: [
        "Up to 10 Pages E-Commerce",
        "High-end Custom Design",
        "Up to 50 Products",
        "Up to 5 Categories",
        "Complete Source Files",
        "Payment Module Integration",
        "Complete W3C Certified HTML",
        "Value Added Services",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "Ultimate",
      price: "50K",
      features: [
        "Unlimited Pages E-Commerce",
        "Admin Panel",
        "Up to 500 Products",
        "Up to 50 Categories",
        "Mobile Responsive",
        "Tax Calculator Integration",
        "Shipping Calculator",
        "Wishlist",
        "Complete Source Files",
        "Dedicated Project Manager",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
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
