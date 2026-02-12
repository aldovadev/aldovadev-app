import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — CODEWITHALDOVA",
  description:
    "Insights on software engineering, cloud architecture, DevOps, and AI.",
};

export default function BlogPage() {
  return (
    <div className="container-main py-24">
      <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
        Blog
      </p>
      <h1 className="section-title text-foreground mb-4">Blog & Insights</h1>
      <p className="text-foreground-muted max-w-xl">
        Technical articles and industry insights — coming soon.
      </p>
    </div>
  );
}
