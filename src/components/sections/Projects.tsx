"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative section-screen text-foreground bg-background"
    >
      <div className="container-main">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12"
          >
            SELECTED <span className="text-tomato">WORKS</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card group hover:border-tomato/30 hover-transition p-0 overflow-hidden"
            >
              <div className="w-full aspect-video relative bg-linear-to-br from-card-bg via-card-bg to-tomato/5">
                <div className="absolute inset-0 bg-linear-to-tr from-tomato/10 to-transparent opacity-0 group-hover:opacity-100 hover-transition" />
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-tomato/10 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-tomato/40" />
                  </div>
                  <span className="text-xs font-mono tracking-wider text-foreground-muted/30">{project.title.charAt(0)}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 group-hover:text-tomato hover-transition">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground-muted mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-tomato bg-tomato/5 border border-tomato/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-foreground-muted hover:text-tomato hover-transition flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3 h-3" /> Visit
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-foreground-muted hover:text-tomato hover-transition flex items-center gap-1.5"
                    >
                      <Github className="w-3 h-3" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
