import type { Client, Partner, ProcessStep } from "@/types";

export const clients: Client[] = [
  {
    name: "Client A",
    logo: "/images/clients/client-a.png",
    industry: "Healthcare",
    testimonial:
      "CODEWITHALDOVA helped us modernize our infrastructure and streamline our development workflow significantly.",
    contactPerson: "John Doe",
    contactRole: "CTO",
  },
  {
    name: "Client B",
    logo: "/images/clients/client-b.png",
    industry: "Finance",
    testimonial:
      "Their DevSecOps enablement transformed how we approach security in our CI/CD pipeline.",
    contactPerson: "Jane Smith",
    contactRole: "VP Engineering",
  },
  {
    name: "Client C",
    logo: "/images/clients/client-c.png",
    industry: "E-commerce",
  },
  {
    name: "Client D",
    logo: "/images/clients/client-d.png",
    industry: "IoT",
  },
];

export const partners: Partner[] = [
  {
    name: "Amazon Web Services",
    logo: "/images/partners/aws.png",
    type: "technology",
    url: "https://aws.amazon.com",
  },
  {
    name: "Google Cloud",
    logo: "/images/partners/gcp.png",
    type: "technology",
    url: "https://cloud.google.com",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, challenges, and goals through a focused consultation.",
  },
  {
    step: 2,
    title: "Strategy",
    description:
      "We craft a clear technical roadmap aligned with your objectives, timeline, and budget.",
  },
  {
    step: 3,
    title: "Build",
    description:
      "Our team executes with modern engineering practices — agile sprints, CI/CD, and continuous feedback.",
  },
  {
    step: 4,
    title: "Deliver & Support",
    description:
      "We hand over a production-ready solution with documentation, training, and ongoing support options.",
  },
];
