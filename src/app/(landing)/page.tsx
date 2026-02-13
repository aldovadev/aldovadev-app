import { Suspense } from "react";
import type { Metadata } from "next";
import {
  HeroSection,
  ProblemSection,
  ServicesOverview,
  SolutionsGrid,
  WhyChooseUs,
  ClientsSection,
  ProcessSection,
  CTASection,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "CODEWITHALDOVA — IT Consulting & Tech Solutions",
  description:
    "End-to-end IT consulting, tech enablement solutions, and industry-based tech courses. Build smarter with CODEWITHALDOVA.",
};

export default function HomePage() {
  return (
    <>
      <Suspense>
        <HeroSection />
      </Suspense>
      <ProblemSection />
      <ServicesOverview />
      <SolutionsGrid />
      <WhyChooseUs />
      <ClientsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
