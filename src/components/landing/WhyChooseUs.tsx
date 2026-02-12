"use client";

import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Zap,
  HeartHandshake,
} from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "Engineer-Led Consulting",
    description:
      "Our consultants are active engineers — not just advisors. We understand codebases, not just slide decks.",
  },
  {
    icon: Shield,
    title: "Security-First Mindset",
    description:
      "DevSecOps isn't an add-on — it's embedded in every solution we deliver, from architecture to deployment.",
  },
  {
    icon: Zap,
    title: "Rapid Time to Value",
    description:
      "We use proven templates, automation, and agile delivery to get you results in weeks, not quarters.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We don't just deliver and disappear. Our retainer and support models keep your tech stack healthy over time.",
  },
];

export function WhyChooseUs() {
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
            Why Us
          </p>
          <h2 className="section-title text-foreground mb-4">
            Built Different. Delivered Better.
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            We combine deep technical expertise with a practical, outcome-driven
            approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-tomato/10 flex items-center justify-center">
                <d.icon className="w-5 h-5 text-tomato" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {d.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {d.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
