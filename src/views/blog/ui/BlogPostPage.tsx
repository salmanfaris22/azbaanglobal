import Link from "next/link";
import type { BlogPost } from "@/entities/blog";
import { getBlogPost } from "@/entities/blog";
import { SEO_PAGE_BY_SLUG } from "@/shared/config/seo-pages";
import { WHATSAPP_URL, SITE } from "@/shared/config/site";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";

type BlogPostPageProps = {
  post: BlogPost;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <article className="blog-article">
      <section className="location-hero section">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <p className="location-hero__eyebrow">{post.meta}</p>
          <h1 className="location-hero__title">{post.title}</h1>
          <p className="location-hero__copy">{post.description}</p>
          <div className="location-hero__actions">
            <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Ask Azbaan on WhatsApp
            </a>
            <Button href="/#contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container className="blog-article__content">
          {post.sections.map((section) => (
            <div key={section.heading ?? section.paragraphs[0]?.slice(0, 32)} className="blog-article__section">
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          ))}
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="location-faq__title">Related services &amp; offices</h2>
          <div className="location-related__links">
            {post.relatedServiceSlugs.map((slug) => {
              const page = SEO_PAGE_BY_SLUG[slug];
              if (!page) return null;
              return (
                <Link key={slug} href={`/${slug}`}>
                  {page.h1}
                </Link>
              );
            })}
            {post.relatedLocationSlugs.map((slug) => {
              const page = SEO_PAGE_BY_SLUG[slug];
              if (!page) return null;
              return (
                <Link key={slug} href={`/${slug}`}>
                  {page.h1}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section section-alt location-related">
        <Container>
          <h2>More attestation guides</h2>
          <div className="location-related__links">
            {post.relatedBlogSlugs.map((slug) => {
              const related = getBlogPost(slug);
              if (!related) return null;
              return (
                <Link key={slug} href={`/blog/${slug}`}>
                  {related.title}
                </Link>
              );
            })}
            <Link href="/blog">All blog posts</Link>
            <Link href="/">Homepage</Link>
          </div>
          <p className="blog-article__byline">
            Published by {SITE.name} · azbaanglobal.com
          </p>
        </Container>
      </section>
    </article>
  );
}
