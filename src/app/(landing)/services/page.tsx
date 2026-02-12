import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — CODEWITHALDOVA",
  description:
    "IT consulting packages, tech enablement solutions, and industry-based training courses.",
};

export default function ServicesPage() {
  return (
    <div className="container-main py-24">
      <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
        Services
      </p>
      <h1 className="section-title text-foreground mb-4">
        Our Services & Solutions
      </h1>
      <p className="text-foreground-muted max-w-xl">
        Comprehensive IT consulting, tech enablement, and training — coming
        soon.
      </p>
    </div>
  );
}
