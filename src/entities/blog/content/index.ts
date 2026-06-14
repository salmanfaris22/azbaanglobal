import { BLOG_POSTS_PART_1 } from "./posts-part-1";
import { BLOG_POSTS_PART_2 } from "./posts-part-2";
import type { BlogPost } from "../model/types";

export const BLOG_POSTS: BlogPost[] = [...BLOG_POSTS_PART_1, ...BLOG_POSTS_PART_2];

export const BLOG_POST_BY_SLUG = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post]),
) as Record<string, BlogPost>;

export const BLOG_SLUGS = BLOG_POSTS.map((post) => post.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POST_BY_SLUG[slug];
}

/** Homepage preview — latest 3 posts */
export const BLOG_PREVIEW_POSTS = [...BLOG_POSTS]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .slice(0, 3);
