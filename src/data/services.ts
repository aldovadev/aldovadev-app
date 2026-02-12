import type { ServicePackage } from "@/types";

export const consultingPackages: ServicePackage[] = [
  {
    id: "starter",
    tier: "consulting",
    name: "Starter",
    tagline: "Get clarity on your tech direction",
    description:
      "Perfect for businesses exploring digital transformation or needing an expert second opinion on their tech strategy.",
    features: [
      "Software architecture audit",
      "Tech stack recommendations",
      "1-on-1 consultation session",
      "Written assessment report",
    ],
    cta: "Book Consultation",
    icon: "Compass",
  },
  {
    id: "growth",
    tier: "consulting",
    name: "Growth",
    tagline: "Build and scale with confidence",
    description:
      "For businesses ready to build or upgrade their software systems with hands-on engineering support.",
    features: [
      "Custom software development",
      "IT department assessment & enhancement",
      "CI/CD pipeline setup",
      "Code review & quality gates",
      "Monthly progress reviews",
    ],
    cta: "Start Project",
    highlighted: true,
    icon: "Rocket",
  },
  {
    id: "enterprise",
    tier: "consulting",
    name: "Enterprise",
    tagline: "Full-spectrum IT partnership",
    description:
      "End-to-end IT management for organizations that need a dedicated technology partner.",
    features: [
      "Full SDLC management",
      "Team training & upskilling",
      "Ongoing IT advisory retainer",
      "Infrastructure management",
      "Security & compliance auditing",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
    icon: "Building2",
  },
];
