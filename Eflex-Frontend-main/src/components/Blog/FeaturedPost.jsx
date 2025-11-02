

const featuredPost = {
  title: "Boost Your DevOps Workflow with CodoBee",
  excerpt:
    "In the fast-paced world of IT development and DevOps, efficiency and rapid feedback are critical to success.",
  image: "/team.jpg", // replace with your image
  time: "3 min read",
};

export default function FeaturedPost() {
  return (
    <div className="featured-post">
      <div className="featured-image">
        <img src={featuredPost.image} alt={featuredPost.title} />
        <div className="featured-overlay">
          <h2>{featuredPost.title}</h2>
          <p>{featuredPost.excerpt}</p>
          <span>{featuredPost.time}</span>
        </div>
      </div>
    </div>
  );
}
