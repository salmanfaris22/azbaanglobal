import { HomePage } from "@/views/home";
import { HERO_IMAGE } from "@/shared/config/images";

export default function Page() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href={HERO_IMAGE.src}
        type="image/avif"
        fetchPriority="high"
      />
      <HomePage />
    </>
  );
}
