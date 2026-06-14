export type BlogSection = {
  heading?: string;
  paragraphs: readonly string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  meta: string;
  publishedAt: string;
  keyword: string;
  sections: readonly BlogSection[];
  relatedServiceSlugs: readonly string[];
  relatedLocationSlugs: readonly string[];
  relatedBlogSlugs: readonly string[];
};
