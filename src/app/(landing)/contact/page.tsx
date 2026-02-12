import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — CODEWITHALDOVA",
  description:
    "Get in touch with CODEWITHALDOVA for IT consulting and tech solutions.",
};

export default function ContactPage() {
  return (
    <div className="container-main py-24">
      <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
        Contact
      </p>
      <h1 className="section-title text-foreground mb-4">Get in Touch</h1>
      <p className="text-foreground-muted max-w-xl">
        Book a consultation or send us a message — contact form coming soon.
      </p>
    </div>
  );
}
