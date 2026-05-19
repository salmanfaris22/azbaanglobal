import type { BlogPost } from "../model/posts";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <span className="blog-meta">{post.meta}</span>
      <strong>{post.title}</strong>
      <p>{post.description}</p>
    </article>
  );
}
