import type { CourseTrack } from "@/types/index";

export const courseTracks: CourseTrack[] = [
  {
    id: "software",
    industry: "Software Engineering",
    description:
      "Production-grade web and mobile development using modern stacks and real-world project scenarios.",
    topics: [
      "Full-stack web development (React, Next.js, Node.js)",
      "Cloud-native & microservices architecture",
      "API design & integration patterns",
      "Testing strategies & CI/CD",
    ],
    format: "both",
    icon: "Code2",
  },
  {
    id: "medical",
    industry: "Medical & Healthcare Tech",
    description:
      "Build compliant health data systems with real-case studies from the medical industry.",
    topics: [
      "HL7/FHIR compliance & health data standards",
      "Medical information systems",
      "Healthcare IoT integration",
      "Data privacy & regulatory compliance",
    ],
    format: "both",
    icon: "HeartPulse",
  },
  {
    id: "iot",
    industry: "IoT & Embedded Systems",
    description:
      "End-to-end IoT development from device management to cloud dashboards with industrial use cases.",
    topics: [
      "Device management & provisioning",
      "Edge computing & data processing",
      "Sensor data pipelines",
      "IoT security best practices",
    ],
    format: "both",
    icon: "Cpu",
  },
  {
    id: "ai-ml",
    industry: "AI & Machine Learning",
    description:
      "Practical AI training for teams — from prompt engineering to building production-ready agent workflows.",
    topics: [
      "AI fundamentals for engineers",
      "Prompt engineering & LLM integration",
      "Agent workflow development",
      "ML pipeline operations (MLOps)",
    ],
    format: "both",
    icon: "BrainCircuit",
  },
];
