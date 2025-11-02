

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <div className="blog-card-overlay">
          <h3>{post.title}</h3>
        </div>
      </div>
      <p className="blog-excerpt">{post.excerpt}</p>
      <div className="blog-meta">
        <span className="read-more">READ MORE</span>
        <span className="time">{post.time}</span>
      </div>
    </div>
  );
}
