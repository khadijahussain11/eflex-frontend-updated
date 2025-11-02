import { useState } from "react";
import { motion } from "framer-motion"; 
import "./DomainHosting.css"

export default function DomainHosting() {
  const [active, setActive] = useState(null);

  
  const plans = [
    {
      name: "Basic",
      price: "7K",
      features: [
        "4GB Hosting Space",
        "50 Email Accounts",
        "Unlimited FTP Accounts",
        "Unlimited Sub Domain",
        "Unlimited Bandwidth",
        "Softaculous 370+ Scripts",
        "Live Support 24/7",
        "Dedicated Control Panel",
        "Free SSL",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "Premium",
      price: "10K",
      badge: "Best Value",
      features: [
        "8GB Hosting Space",
        "100 Email Accounts",
        "Unlimited Bandwidth",
        "Unlimited FTP Accounts",
        "Unlimited Sub Domain",
        "Softaculous 400+ Scripts",
        "Live Support 24/7",
        "Dedicated Control Panel",
        "Free SSL",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
    {
      name: "Ultimate",
      price: "16K",
      features: [
        "16GB Hosting Space",
        "200 Email Accounts",
        "Unlimited Bandwidth",
        "Unlimited FTP Accounts",
        "Unlimited Sub Domain",
        "Softaculous 450+ Scripts",
        "Live Support 24/7",
        "100% Ownership Rights",
        "100% Satisfaction Guarantee",
        "100% Money Back Guarantee",
        "NO MONTHLY OR ANY HIDDEN FEE",
      ],
    },
  ];

  return (
    <div className="domain-hosting">
    
      <div className="dm-head">
        <h2>Domain Hosting</h2>
        <p>Reliable hosting plans for your business needs</p>
      </div>

     
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={[
              "price-card",
              plan.badge ? "ribboned" : "",
              plan.badge === "Best Value" ? "best" : "",
              active === i ? "active" : "",
            ].join(" ")}
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 100 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.3 }}
            viewport={{ once: true }}
          >
            {plan.badge && <span className="ribbon">{plan.badge}</span>}

            <div className="price-top">
              <h3>{plan.name} Plan</h3>
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
