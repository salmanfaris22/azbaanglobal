import Link from "next/link";
import type { BlogPost } from "../model/types";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card blog-card--link">
      <span className="blog-meta">{post.meta}</span>
      <strong>{post.title}</strong>
      <p>{post.description}</p>
      <span className="card-link">Read article</span>
    </Link>
  );
}
