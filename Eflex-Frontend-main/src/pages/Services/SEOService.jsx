

import { motion } from "framer-motion"; 
import "./SEOService.css";

export default function SEOService() {
  const services = [
    {
      key: "keyword",
      title: "Keyword Research",
      desc: "Conduct thorough research to identify relevant keywords and phrases that have high search volumes and low competition. Incorporate these keywords strategically into your content to improve search engine rankings.",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
    {
      key: "custom",
      title: "Customize Strategies",
      desc: "We offer custom strategies tailored to each client — planning & execution designed to meet unique business goals.",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921226.png",
    },
    {
      key: "drive",
      title: "Drive Targeted Audience",
      desc: "Drive targeted traffic, increase brand exposure, and maximize your ROI with paid search (Google Ads) and precise audience targeting.",
      img: "https://cdn-icons-png.flaticon.com/512/747/747310.png",
    },
    {
      key: "planning",
      title: "SEO Planning & Strategy",
      desc: "Eflex-Solution excels in SEO planning and strategy, offering a personalized approach to boost online presence.",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      key: "onpage",
      title: "On-page SEO",
      desc: "Optimization of meta tags, headings, content structure, images and technical on-page elements to improve visibility.",
      img: "https://cdn-icons-png.flaticon.com/512/2913/2913506.png",
    },
    {
      key: "offpage",
      title: "Off-page SEO",
      desc: "Top-notch off-page SEO strategies (link building, outreach, citations) to boost authority and rankings.",
      img: "https://cdn-icons-png.flaticon.com/512/2913/2913706.png",
    },
    {
      key: "ecom",
      title: "Ecommerce SEO",
      desc: "Optimize product pages, category pages, and site structure to increase visibility and sales for online stores.",
      img: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
    },
    {
      key: "video",
      title: "Video SEO",
      desc: "Improve discoverability and reach of video content across platforms (YouTube, social), boosting views and engagement.",
      img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      key: "local",
      title: "Local SEO",
      desc: "Help businesses dominate local search with Google Business optimization, citations, reviews and local content.",
      img: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
  ];

  return (
    <div className="seo-page">
    
      <div className="seo-head">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          SEO Services
        </motion.h2>
      </div>

    
      <div className="seo-grid">
        {services.map((s, i) => (
          <motion.article
            key={s.key}
            className={`seo-card seo-${s.key}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }} 
          >
            <div className="seo-img-wrap">
              <img src={s.img} alt={s.title} className="seo-img" />
            </div>

            <h3 className="seo-title">{s.title}</h3>
            <p className="seo-desc">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
