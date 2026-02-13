import type { NavLink } from "@/types";

export const companyNavLinks: NavLink[] = [
  {
    label: "Solutions",
    href: "/services",
    children: [
      {
        label: "AI Enablement",
        href: "/services",
        description: "Agent strategies, LLM integration & AI training",
      },
      {
        label: "Software Development",
        href: "/services",
        description: "Custom web, mobile & enterprise applications",
      },
      {
        label: "Cybersecurity",
        href: "/services",
        description: "Pentesting, DevSecOps & digital forensics",
      },
      {
        label: "OCR & Document Intelligence",
        href: "/services",
        description: "Automated document processing pipelines",
      },
      {
        label: "Data Management",
        href: "/services",
        description: "Data architecture, pipelines & governance",
      },
      {
        label: "Infrastructure Tooling",
        href: "/services",
        description: "Cloud-native infra with IaC & monitoring",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "IT Consulting",
        href: "/services",
        description: "Starter, Growth & Enterprise consulting packages",
      },
      {
        label: "AI Enablement",
        href: "/services",
        description: "AI training, workshops & adoption strategy",
      },
      {
        label: "Private Courses",
        href: "/services",
        description: "Industry-based tech training & upskilling",
      },
      {
        label: "SDLC Enhancement",
        href: "/services",
        description: "CI/CD, testing & developer workflows",
      },
      {
        label: "DevSecOps Enablement",
        href: "/services",
        description: "Security automation baked into every deploy",
      },
    ],
  },
  {
    label: "Explore",
    href: "/blog",
    children: [
      {
        label: "Blog",
        href: "/blog",
        description: "Articles, tutorials & tech insights",
      },
      {
        label: "News",
        href: "/blog",
        description: "Latest updates & announcements",
      },
      {
        label: "Our Story",
        href: "/about",
        description: "The journey behind CODEWITHALDOVA",
      },
    ],
  },
  {
    label: "Support",
    href: "/contact",
    children: [
      {
        label: "Knowledge Base",
        href: "/blog",
        description: "Guides, FAQs & technical documentation",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with our team",
      },
    ],
  },
];
