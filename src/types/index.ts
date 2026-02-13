// ── Personal portfolio ──
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  /* Detail popup fields */
  techStack?: string[];
  keyFeatures?: string[];
  approach?: string;
  category?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: "full-time" | "contract" | "freelance";
  description: string;
  highlights: string[];
  techStack: string[];
}

// ── Company ──
export interface ServicePackage {
  id: string;
  tier: "consulting" | "solutions" | "courses";
  name: string;
  tagline: string;
  description: string;
  features: string[];
  price?: string;
  cta: string;
  highlighted?: boolean;
  icon: string;
}

export interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Client {
  name: string;
  logo: string;
  industry: string;
  testimonial?: string;
  contactPerson?: string;
  contactRole?: string;
}

export interface Partner {
  name: string;
  logo: string;
  type: "technology" | "platform" | "strategic";
  url?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CourseTrack {
  id: string;
  industry: string;
  description: string;
  topics: string[];
  format: "online" | "offline" | "both";
  icon: string;
}

// ── Tech Stack ──
export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  id: string;
  pillar: string;
  name: string;
  items: TechItem[];
}

// ── Navigation ──
export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  group?: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavDropdownItem[];
}