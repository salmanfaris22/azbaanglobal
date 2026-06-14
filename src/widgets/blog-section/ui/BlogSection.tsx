import Link from "next/link";
import { BLOG_PREVIEW_POSTS, BlogCard } from "@/entities/blog";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";

export function BlogSection() {
  return (
    <Section id="blog" trackSection ariaLabelledBy="blogTitle">
      <Container>
        <SectionHead
          label="Blog"
          title="Helpful updates for certificate, document, and global customers."
          titleId="blogTitle"
          compact
        />

        <Reveal className="blog-panel">
          <div className="blog-grid">
            {BLOG_PREVIEW_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <p className="blog-section-cta">
            <Link href="/blog">View all attestation guides →</Link>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
