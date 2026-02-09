import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "NEBULA COMMERCE",
    description:
      "Architecting the future of digital exchange. Headless. Scalable.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/aldovadev",
    featured: true,
  },
  {
    id: "2",
    title: "QUANTUM TASK",
    description:
      "Real-time collaboration at the speed of thought. Zero latency.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Node.js", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/aldovadev",
    featured: true,
  },
  {
    id: "3",
    title: "SYNTHETIC MINDS",
    description:
      "AI-driven content generation. Blurring the line between creation and computation.",
    image: "/projects/aicontent.jpg",
    tags: ["Python", "AI", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/aldovadev",
    featured: true,
  },
];
