"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Layers,
  Lightbulb,
  Code2,
} from "lucide-react";
import { projects } from "@/data/projects";
import ShinyText from "@/components/ui/ShinyText";
import type { Project } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui";

/* Accent colours per card index */
const accents = [
  { border: "border-tomato/30", bg: "bg-tomato/5", text: "text-tomato", glow: "bg-tomato/10" },
];

/* ─── Blog-style card ─── */
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const a = accents[index % accents.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={onOpen}
      className={`group relative flex flex-col overflow-hidden rounded-xl border ${a.border} bg-card-bg hover:bg-card-bg-hover cursor-pointer hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]`}
    >
      {/* Image placeholder */}
      <div className={`relative h-28 sm:h-32 ${a.bg} overflow-hidden`}>
        {/* Abstract pattern instead of missing image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-12 h-12 rounded-xl ${a.glow} border ${a.border} flex items-center justify-center`}>
            <Code2 className={`w-5 h-5 ${a.text}`} />
          </div>
        </div>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Category badge */}
        {project.category && (
          <span className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-mono font-medium ${a.text} ${a.bg} border ${a.border} rounded-full backdrop-blur-sm`}>
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-3.5">
        <h3 className="text-sm font-semibold text-foreground tracking-tight mb-1 group-hover:text-tomato transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs text-foreground-muted leading-relaxed line-clamp-2 mb-3 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 text-[9px] font-mono text-foreground-muted bg-surface border border-border-color rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2.5 border-t border-border-color/50">
          <span className={`text-[11px] font-medium ${a.text} inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
            View Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Source code"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Live project"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Detail popup ─── */
function ProjectDetail({ project, index }: { project: Project; index: number }) {
  const a = accents[index % accents.length];

  return (
    <div className="space-y-6">
      {/* Hero bar */}
      <div className={`${a.bg} border ${a.border} rounded-xl p-4 flex items-center gap-4`}>
        <div className={`w-12 h-12 rounded-xl ${a.glow} border ${a.border} flex items-center justify-center shrink-0`}>
          <Code2 className={`w-6 h-6 ${a.text}`} />
        </div>
        <div className="min-w-0">
          <p className={`text-xs font-mono ${a.text} mb-0.5`}>{project.category}</p>
          <p className="text-sm text-foreground-muted leading-snug">{project.description}</p>
        </div>
      </div>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 inline-flex items-center gap-2">
            <Layers className={`w-4 h-4 ${a.text}`} />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 text-xs font-mono ${a.text} ${a.bg} border ${a.border} rounded-lg`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 inline-flex items-center gap-2">
            <Lightbulb className={`w-4 h-4 ${a.text}`} />
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground-muted leading-relaxed">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.text} bg-current shrink-0`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Approach */}
      {project.approach && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 inline-flex items-center gap-2">
            <Code2 className={`w-4 h-4 ${a.text}`} />
            Approach
          </h4>
          <p className="text-sm text-foreground-muted leading-relaxed">
            {project.approach}
          </p>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 pt-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium bg-tomato text-white hover:bg-tomato-dark transition-colors shadow-lg shadow-tomato/20"
          >
            <ArrowUpRight className="w-4 h-4" />
            Visit Project
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-foreground border border-border-color hover:border-tomato/40 hover:text-tomato transition-all"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        )}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  return (
    <section
      id="projects"
      className="relative section-screen text-foreground bg-background overflow-hidden"
    >
      <div className="container-main relative z-10 flex flex-col justify-center py-12 lg:py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="section-title">
            <ShinyText
              text="SELECTED WORKS"
              speed={3}
              color="var(--foreground)"
              shineColor="var(--tomato)"
              spread={120}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-foreground-muted mt-2 max-w-lg mx-auto"
          >
            A curated selection of projects that define my craft — from
            full-stack platforms to AI-powered systems.
          </motion.p>
        </motion.div>

        {/* Blog-style card grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelectedProject({ project, index: i })}
            />
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent
          className="bg-background border-border-color sm:max-w-xl max-h-[85vh] overflow-y-auto"
          showCloseButton
        >
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-foreground tracking-tight">
                  {selectedProject.project.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Project details for {selectedProject.project.title}
                </DialogDescription>
              </DialogHeader>
              <ProjectDetail
                project={selectedProject.project}
                index={selectedProject.index}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
