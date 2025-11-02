import { motion } from "framer-motion";
import "./MobileApp.css" 

export default function MobileApp() {

  const services = [
    {
      title: "Android App Development",
      img: "https://cdn-icons-png.flaticon.com/512/888/888839.png",
      desc: "We deliver high-performing Android apps tailored to your business needs with seamless UI/UX.",
    },
    {
      title: "iOS App Development",
      img: "https://cdn-icons-png.flaticon.com/512/888/888857.png",
      desc: "We create user-friendly iOS apps optimized for performance and design to engage your customers.",
    },
    {
      title: "Cross-Platform Apps",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      desc: "With React Native & Flutter, we build cross-platform apps that run smoothly on Android & iOS.",
    },
    {
      title: "UI/UX Design",
      img: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
      desc: "Our creative designers craft intuitive and engaging app interfaces for a delightful user experience.",
    },
    {
      title: "Enterprise Solutions",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      desc: "We build scalable and secure enterprise-grade mobile applications for businesses of all sizes.",
    },
  ];

  return (
    <div className="mobile-app">
      {/* Heading */}
      <div className="dm-head">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mobile App Development
        </motion.h2>
      </div>

      {/* Services */}
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} // left-right alternate
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
