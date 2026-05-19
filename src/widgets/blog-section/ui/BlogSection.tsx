import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { BLOG_POSTS, BlogCard } from "@/entities/blog";

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
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.meta} post={post} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
