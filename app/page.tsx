import fs from "fs";
import path from "path";

function getBodyHtml(): string {
  const filePath = path.join(process.cwd(), "content", "body.html");
  return fs.readFileSync(filePath, "utf8");
}

export default function HomePage() {
  const bodyHtml = getBodyHtml();

  return (
    <div
      id="site-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
    />
  );
}
