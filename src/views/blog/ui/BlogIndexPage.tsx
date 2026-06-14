import Link from "next/link";
import { BLOG_POSTS } from "@/entities/blog";
import { Container } from "@/shared/ui/Container";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";

export function BlogIndexPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className="blog-index">
      <section className="location-hero section">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <p className="location-hero__eyebrow">Azbaan global guides</p>
          <h1 className="location-hero__title">Attestation blog &amp; certificate guides</h1>
          <p className="location-hero__copy">
            Expert articles on UAE MOFA attestation, Indian degree legalization, family visa
            documents, and commercial paperwork from Azbaan global.
          </p>
        </Container>
      </section>

      <section className="section section-alt">
        <Container>
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card blog-card--link">
                <span className="blog-meta">{post.meta}</span>
                <strong>{post.title}</strong>
                <p>{post.description}</p>
                <span className="card-link">Read article</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
