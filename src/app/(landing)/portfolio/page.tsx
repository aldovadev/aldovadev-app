import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — CODEWITHALDOVA",
  description: "Selected projects and case studies from CODEWITHALDOVA.",
};

export default function PortfolioPage() {
  return (
    <div className="container-main py-24">
      <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
        Portfolio
      </p>
      <h1 className="section-title text-foreground mb-4">Our Work</h1>
      <p className="text-foreground-muted max-w-xl">
        Featured projects and case studies — coming soon.
      </p>
    </div>
  );
}
