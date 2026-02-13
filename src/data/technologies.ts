import type { TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
  // ── Pillar 1: Software Development & Engineering ──
  {
    id: "programming-languages",
    pillar: "Software Development & Engineering",
    name: "Programming Languages",
    items: [
      { name: "Java", icon: "openjdk" },
      { name: "C#", icon: "csharp" },
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Go", icon: "go" },
      { name: "Rust", icon: "rust" },
    ],
  },
  {
    id: "platforms-frameworks",
    pillar: "Software Development & Engineering",
    name: "Platforms & Frameworks",
    items: [
      { name: ".NET", icon: "dotnet" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Angular", icon: "angular" },
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "react" },
    ],
  },
  {
    id: "quality-assurance",
    pillar: "Software Development & Engineering",
    name: "Quality Assurance",
    items: [
      { name: "Playwright", icon: "playwright" },
      { name: "Cypress", icon: "cypress" },
      { name: "Postman", icon: "postman" },
      { name: "k6", icon: "k6" },
    ],
  },

  // ── Pillar 2: AI & Cybersecurity ──
  {
    id: "ai-ml",
    pillar: "AI & Cybersecurity",
    name: "AI / ML",
    items: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "LangChain", icon: "langchain" },
      { name: "OpenAI", icon: "openai" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "MLflow", icon: "mlflow" },
    ],
  },
  {
    id: "cybersecurity",
    pillar: "AI & Cybersecurity",
    name: "Cybersecurity",
    items: [
      { name: "Burp Suite", icon: "burpsuite" },
      { name: "Metasploit", icon: "metasploit" },
      { name: "Wireshark", icon: "wireshark" },
      { name: "OWASP", icon: "owasp" },
      { name: "Snyk", icon: "snyk" },
    ],
  },
  {
    id: "digital-forensics",
    pillar: "AI & Cybersecurity",
    name: "Digital Forensics & Monitoring",
    items: [
      { name: "Splunk", icon: "splunk" },
      { name: "Elastic", icon: "elastic" },
      { name: "Grafana", icon: "grafana" },
      { name: "Datadog", icon: "datadog" },
    ],
  },

  // ── Pillar 3: Infrastructure & Automation ──
  {
    id: "cloud-infrastructure",
    pillar: "Infrastructure & Automation",
    name: "Cloud & Infrastructure",
    items: [
      { name: "AWS", icon: "amazonwebservices" },
      { name: "Azure", icon: "microsoftazure" },
      { name: "GCP", icon: "googlecloud" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Terraform", icon: "terraform" },
      { name: "Pulumi", icon: "pulumi" },
    ],
  },
  {
    id: "devsecops",
    pillar: "Infrastructure & Automation",
    name: "DevSecOps",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "SonarQube", icon: "sonarqube" },
      { name: "Trivy", icon: "trivy" },
      { name: "ArgoCD", icon: "argo" },
    ],
  },
  {
    id: "low-code",
    pillar: "Infrastructure & Automation",
    name: "Low-Code / No-Code",
    items: [
      { name: "OutSystems", icon: "outsystems" },
      { name: "Power Apps", icon: "powerapps" },
      { name: "Retool", icon: "retool" },
      { name: "Mendix", icon: "mendix" },
    ],
  },
];
