"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  ScanText,
  Database,
  Server,
  GitBranch,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { solutions } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  Bot,
  ScanText,
  Database,
  Server,
  GitBranch,
  ShieldCheck,
};

export function SolutionsGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
            Tech Solutions
          </p>
          <h2 className="section-title text-foreground mb-4">
            Enablement Solutions That Stick
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Targeted tech packages to solve specific engineering challenges —
            from AI agents to DevSecOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => {
            const Icon = (iconMap[sol.icon] ?? Bot) as React.ElementType<{ className?: string }>;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card group"
              >
                <div className="w-10 h-10 rounded-lg bg-tomato/10 flex items-center justify-center mb-4 group-hover:bg-tomato/20 transition-colors">
                  <Icon className="w-5 h-5 text-tomato" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {sol.name}
                </h3>
                <p className="text-xs text-tomato mb-3">{sol.tagline}</p>
                <p className="text-sm text-foreground-muted mb-4">
                  {sol.description}
                </p>
                <ul className="space-y-1.5">
                  {sol.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-foreground-muted"
                    >
                      <span className="text-tomato mt-0.5 text-[10px]">●</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="text-sm text-tomato hover:underline inline-flex items-center gap-1"
          >
            Explore all solutions <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
