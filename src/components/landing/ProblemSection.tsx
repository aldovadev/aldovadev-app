"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 70, suffix: "%", label: "of IT projects fail to deliver on time" },
  { value: 60, suffix: "%", label: "of businesses lack a clear tech roadmap" },
  { value: 3, suffix: "x", label: "cost to fix problems found late in SDLC" },
];

export function ProblemSection() {
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
            The Reality
          </p>
          <h2 className="section-title text-foreground mb-4">
            Technology Should Accelerate Growth —{" "}
            <span className="text-tomato">Not Slow It Down</span>
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Most businesses struggle with fragmented tools, unclear strategies,
            and teams stretched thin. The result? Missed deadlines, security
            gaps, and wasted budgets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-tomato mb-2">
                <CountUp to={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <p className="text-sm text-foreground-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
