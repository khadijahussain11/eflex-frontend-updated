import React from "react";
import "./BlogPage.css";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How AI is Transforming Businesses",
      description:
        "Artificial intelligence is reshaping industries. Here’s how you can leverage it for growth.",
      image: "/team.jpg",
      link: "/blog/ai-transforming-businesses",
    },
    {
      title: "Top 10 Web Development Trends in 2025",
      description:
        "Stay ahead of the curve with the latest technologies and practices in web development.",
      image: "/team.jpg",
      link: "/blog/web-development-trends-2025",
    },
    {
      title: "Designing for User Experience",
      description:
        "Great UX is at the heart of successful digital products. Let’s explore how to get it right.",
      image: "/team.jpg",
      link: "/blog/designing-for-ux",
    },
    {
      title: "Cloud Solutions for Modern Startups",
      description:
        "Scalable cloud infrastructure can power your business growth like never before.",
      image: "/team.jpg",
      link: "/blog/cloud-solutions",
    },
    {
      title: "Digital Marketing in 2025",
      description:
        "Discover the latest strategies to enhance your brand’s online presence and reach.",
      image: "/team.jpg",
      link: "/blog/digital-marketing-2025",
    },
    {
      title: "The Future of Mobile Apps",
      description:
        "Mobile applications continue to dominate. Here’s what the future holds for app development.",
      image: "/team.jpg",
      link: "/blog/future-of-mobile-apps",
    },
  ];

  return (
    <div className="blog-page">
      {/* HERO SECTION */}
      <section className="blog-hero">
        <h1>Our Blog</h1>
        <p>
          Insights, stories, and updates from the world of technology, design,
          and digital growth.
        </p>
      </section>

      <section className="featured-section">
        <div className="featured-main">
          <img src="/team.jpg" alt="Featured" />
          <div className="overlay">
            <h2>Boost Your DevOps Workflow with CodoBee</h2>
            <p>
              In the fast-paced world of IT development and DevOps, efficiency
              and rapid feedback are critical...
            </p>
            <a href="/blog/devops-workflow" className="read-more">
              Read More →
            </a>
          </div>
          <div className="animated-line"></div>
        </div>

        <div className="featured-side">
          <div className="featured-small">
            <img src="/team.jpg" alt="Small Featured" />
            <div className="overlay">
              <h3>7 Biggest Myths about AI</h3>
              <a href="/blog/ai-myths" className="read-more">
                Read More →
              </a>
            </div>
            <div className="animated-line"></div>
          </div>
          <div className="featured-small">
            <img src="/team.jpg" alt="Small Featured" />
            <div className="overlay">
              <h3>7 Ways to Use AI in Business</h3>
              <a href="/blog/ai-in-business" className="read-more">
                Read More →
              </a>
            </div>
            <div className="animated-line"></div>
          </div>
        </div>
      </section>

      <section className="blog-grid">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-card-content">
              <h4>{post.title}</h4>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">
                Read More →
              </a>
            </div>
            <div className="animated-line"></div>
          </div>
        ))}
      </section>
    </div>
  );
}
