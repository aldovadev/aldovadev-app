import type { TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
  // ── Pillar 1: Software Development & Engineering ──
  {
    id: "programming-languages",
    pillar: "Software Development & Engineering",
    name: "Programming Languages",
    items: [
      { name: "Java", icon: "openjdk", color: "ED8B00" },
      { name: "C#", icon: "csharp", color: "512BD4", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { name: "Python", icon: "python", color: "3776AB" },
      { name: "TypeScript", icon: "typescript", color: "3178C6" },
      { name: "Go", icon: "go", color: "00ADD8" },
      { name: "Rust", icon: "rust", color: "DEA584" },
    ],
  },
  {
    id: "platforms-frameworks",
    pillar: "Software Development & Engineering",
    name: "Platforms & Frameworks",
    items: [
      { name: ".NET", icon: "dotnet", color: "512BD4" },
      { name: "Spring Boot", icon: "springboot", color: "6DB33F" },
      { name: "Next.js", icon: "nextdotjs", color: "999999" },
      { name: "Angular", icon: "angular", color: "0F0F11" },
      { name: "Flutter", icon: "flutter", color: "02569B" },
      { name: "React Native", icon: "react", color: "61DAFB" },
    ],
  },
  {
    id: "quality-assurance",
    pillar: "Software Development & Engineering",
    name: "Quality Assurance",
    items: [
      { name: "Playwright", icon: "playwright", color: "2EAD33", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
      { name: "Cypress", icon: "cypress", color: "69D3A7" },
      { name: "Postman", icon: "postman", color: "FF6C37" },
      { name: "k6", icon: "k6", color: "7D64FF" },
    ],
  },

  // ── Pillar 2: AI & Cybersecurity ──
  {
    id: "ai-ml",
    pillar: "AI & Cybersecurity",
    name: "AI / ML",
    items: [
      { name: "TensorFlow", icon: "tensorflow", color: "FF6F00" },
      { name: "PyTorch", icon: "pytorch", color: "EE4C2C" },
      { name: "LangChain", icon: "langchain", color: "1C3C3C" },
      { name: "OpenAI", icon: "openai", color: "999999", iconUrl: "https://svgl.app/library/openai.svg" },
      { name: "Hugging Face", icon: "huggingface", color: "FFD21E" },
      { name: "MLflow", icon: "mlflow", color: "0194E2" },
    ],
  },
  {
    id: "cybersecurity",
    pillar: "AI & Cybersecurity",
    name: "Cybersecurity",
    items: [
      { name: "Burp Suite", icon: "burpsuite", color: "FF6633" },
      { name: "Metasploit", icon: "metasploit", color: "2596CD" },
      { name: "Wireshark", icon: "wireshark", color: "1679A7" },
      { name: "OWASP", icon: "owasp", color: "999999" },
      { name: "Snyk", icon: "snyk", color: "4C4A73" },
    ],
  },
  {
    id: "digital-forensics",
    pillar: "AI & Cybersecurity",
    name: "Digital Forensics & Monitoring",
    items: [
      { name: "Splunk", icon: "splunk", color: "000000" },
      { name: "Elastic", icon: "elastic", color: "005571" },
      { name: "Grafana", icon: "grafana", color: "F46800" },
      { name: "Datadog", icon: "datadog", color: "632CA6" },
    ],
  },

  // ── Pillar 3: Infrastructure & Automation ──
  {
    id: "cloud-infrastructure",
    pillar: "Infrastructure & Automation",
    name: "Cloud & Infrastructure",
    items: [
      { name: "AWS", icon: "amazonwebservices", color: "FF9900", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure", icon: "azure", color: "0078D4", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
      { name: "GCP", icon: "googlecloud", color: "4285F4" },
      { name: "Kubernetes", icon: "kubernetes", color: "326CE5" },
      { name: "Terraform", icon: "terraform", color: "844FBA" },
      { name: "Pulumi", icon: "pulumi", color: "8A3391" },
    ],
  },
  {
    id: "devsecops",
    pillar: "Infrastructure & Automation",
    name: "DevSecOps",
    items: [
      { name: "Docker", icon: "docker", color: "2496ED" },
      { name: "GitHub Actions", icon: "githubactions", color: "2088FF" },
      { name: "SonarQube", icon: "sonar", color: "4E9BCD" },
      { name: "Trivy", icon: "trivy", color: "1904DA" },
      { name: "ArgoCD", icon: "argo", color: "EF7B4D" },
    ],
  },
  {
    id: "low-code",
    pillar: "Infrastructure & Automation",
    name: "Low-Code / No-Code",
    items: [
      { name: "n8n", icon: "n8n", color: "EA4B71" },
      { name: "Appsmith", icon: "appsmith", color: "2A2F3D" },
      { name: "Retool", icon: "retool", color: "3D3D3D" },
      { name: "Budibase", icon: "budibase", color: "000000" },
    ],
  },
];
