import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    id: "ai-agent",
    name: "AI Agent Enablement",
    tagline: "Standards & strategy for intelligent automation",
    description:
      "Define AI agent standards, build integration strategies, and embed intelligent automation into your existing workflows.",
    icon: "Bot",
    features: [
      "AI agent architecture design",
      "LLM integration & prompt engineering",
      "Agent workflow orchestration",
      "Quality standards & governance",
    ],
  },
  {
    id: "ocr",
    name: "OCR & Document Intelligence",
    tagline: "Turn documents into actionable data",
    description:
      "Automated document processing pipelines that extract, validate, and route data from any document format.",
    icon: "ScanText",
    features: [
      "Intelligent document parsing",
      "Data extraction pipelines",
      "Template-based & AI-powered OCR",
      "Integration with existing systems",
    ],
  },
  {
    id: "data-management",
    name: "Data Management & Engineering",
    tagline: "Architect your data for scale",
    description:
      "Design robust data architectures, build efficient pipelines, and optimize database performance for growing businesses.",
    icon: "Database",
    features: [
      "Data architecture design",
      "ETL/ELT pipeline development",
      "Database optimization",
      "Data governance & quality",
    ],
  },
  {
    id: "infra-tooling",
    name: "Infrastructure Tooling",
    tagline: "Cloud-native infrastructure done right",
    description:
      "Set up scalable cloud infrastructure with modern IaC tooling, monitoring, and cost optimization strategies.",
    icon: "Server",
    features: [
      "Cloud infrastructure setup (AWS/GCP/Azure)",
      "Infrastructure as Code (Terraform/Pulumi)",
      "Monitoring & observability",
      "Cost optimization audits",
    ],
  },
  {
    id: "sdlc-enhancement",
    name: "SDLC Enhancement",
    tagline: "Ship faster with better workflows",
    description:
      "Modernize your development lifecycle with automation, quality gates, and streamlined team workflows.",
    icon: "GitBranch",
    features: [
      "CI/CD pipeline automation",
      "Automated testing frameworks",
      "Code quality & review gates",
      "Developer experience optimization",
    ],
  },
  {
    id: "devsecops",
    name: "DevSecOps Enablement",
    tagline: "Security baked into every deploy",
    description:
      "Embed security automation into your CI/CD pipeline with vulnerability scanning, compliance checks, and hardened deployments.",
    icon: "ShieldCheck",
    features: [
      "Security automation layers",
      "CI/CD pipeline hardening",
      "Vulnerability scanning & SAST/DAST",
      "Compliance & audit automation",
    ],
  },
];
