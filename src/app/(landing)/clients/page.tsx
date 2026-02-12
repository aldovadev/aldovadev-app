import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Partners — CODEWITHALDOVA",
  description:
    "Companies and technology partners we work with at CODEWITHALDOVA.",
};

export default function ClientsPage() {
  return (
    <div className="container-main py-24">
      <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
        Clients
      </p>
      <h1 className="section-title text-foreground mb-4">
        Clients & Partners
      </h1>
      <p className="text-foreground-muted max-w-xl">
        Companies and partners we proudly work with — coming soon.
      </p>
    </div>
  );
}
