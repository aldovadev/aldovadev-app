"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data";

export function ProcessSection() {
  return (
    <section className="py-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="section-title text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            A clear, repeatable engagement model — from first call to
            production.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1.125rem top-0 bottom-0 w-px bg-border-color hidden sm:block" />

          <div className="space-y-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-5"
              >
                <div className="relative z-10 w-9 h-9 shrink-0 rounded-full bg-tomato text-white flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
