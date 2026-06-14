import { notFound } from "next/navigation";
import { BLOG_SLUGS, getBlogPost } from "@/entities/blog";
import {
  buildBlogPostMetadata,
  buildBlogPostStructuredData,
} from "@/shared/lib/blogSeo";
import { BlogPostPage } from "@/views/blog";
import { LocationPageShell } from "@/views/location-attestation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildBlogPostMetadata(post);
}

export default async function BlogPostRoute({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];
  const structuredData = buildBlogPostStructuredData(post, breadcrumbs);

  return (
    <LocationPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogPostPage post={post} />
    </LocationPageShell>
  );
}
