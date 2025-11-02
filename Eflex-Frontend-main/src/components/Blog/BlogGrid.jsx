import React from "react";
import BlogCard from "./BlogCard";

const posts = [
  {
    title: "7 Biggest Myths and Truths about Artificial Intelligence",
    excerpt:
      "AI is full of misconceptions. Let’s debunk the biggest myths you hear about it.",
    image: "/images/blog1.jpg",
    time: "6 min read",
  },
  {
    title: "7 Ways to Use Artificial Intelligence in Your Business",
    excerpt:
      "AI isn’t just hype — here are real-world applications you can use today.",
    image: "/images/blog2.jpg",
    time: "5 min read",
  },
];

export default function BlogGrid() {
  return (
    <div className="blog-grid">
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
}
