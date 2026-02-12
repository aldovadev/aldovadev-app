import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — CODEWITHALDOVA",
  description:
    "Learn about CODEWITHALDOVA — our mission, team, and values.",
};

export default function AboutPage() {
  return (
    <div className="container-main py-24">
      <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
        About
      </p>
      <h1 className="section-title text-foreground mb-4">About Us</h1>
      <p className="text-foreground-muted max-w-xl">
        Our story, mission, and team — coming soon.
      </p>
    </div>
  );
}
