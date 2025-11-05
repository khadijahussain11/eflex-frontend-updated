import { useState } from "react";
import { motion } from "framer-motion"; 
import "./GraphicDesign.css"


export default function GraphicDesign() {
  const [active, setActive] = useState(null);

  
  const services = [
    {
      title: "Creative Graphic Designing",
      desc: "At Eflex-Solution, we believe that graphic design, logo making & banner design is an essential tool for communicating your message to your audience effectively.",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
    },
    {
      title: "Advantages Of Working With Us",
      desc: "Professional and Experienced Team. We work closely with our clients to understand their unique requirements and deliver designs that meet their specific needs.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    },
    {
      title: "Social Media Designing",
      desc: "However, standing out in the crowded world of social media can be a challenge. We can create custom designs for your social media profiles, including Facebook, Twitter, Instagram, LinkedIn, and more.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  // --- Pricing Plans Data ---
  const plans = [
  {
    name: "Basic",
    price: "3K",
    badge: "Most popular",
    features: [
      "3 Logo Concepts",
      "Business Card Design",
      "PNG & JPG Files",
    ],
  },
  {
    name: "Premium",
    price: "5K",
    badge: "Best value",
    features: [
      "6 Logo Concepts",
      "Business Card & Banner",
      "Social Media Kit",
    ],
  },
  {
    name: "Ultimate",
    price: "10K",
    features: [
      "10 Logo Concepts",
      "5 Banners",
      "Brand Guide",
      "Social Media Kit",
    ],
  },
  {
    name: "Business Package",
    price: "15K",
    features: [
      "15 Logo Concepts",
      "Full Brand Kit",
      "Source Files Included",
      "Dedicated Manager",
    ],
  },
  {
    name: "Professional Package",
    price: "20K",
    features: [
      "20 Logo Concepts",
      "Complete Brand Identity",
      "Letterhead & Envelope",
      "Dedicated Manager",
    ],
  },
  {
    name: "Elite Combo Package",
    price: "30K",
    elite: true,
    features: [
      "30 Logo Concepts",
      "Complete Branding Suite",
      "Deployment & Source Files",
      "Premium Support",
    ],
  },
];

  return (
    <div className="graphic-page">
     
      <h1 className="page-title">Graphic Designing</h1>
      <div className="card-grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={s.img} alt={s.title} />
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      
      <div className="pricing-head">
        <h2>Graphic Designing</h2>
        <p className="sub">Pricing Plans</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={[
              "price-card",
              plan.badge ? "ribboned" : "",
              plan.badge === "Best value" ? "best" : "",
              plan.elite ? "elite" : "",
              active === i ? "active" : "",
            ].join(" ")}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {plan.badge && <span className="ribbon">{plan.badge}</span>}

            <div className="price-top">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
              </div>
            </div>

            <ul className="features">
              {plan.features.map((f) => (
                <li key={f}>
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
