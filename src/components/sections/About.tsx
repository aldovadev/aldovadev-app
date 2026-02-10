"use client";

import { motion } from "framer-motion";

const philosophy = [
  {
    title: "The Signal",
    description: "Distilling complexity into pure function.",
  },
  {
    title: "The Noise",
    description: "Filtering out the unnecessary. Minimalism as a methodology.",
  },
  {
    title: "The Void",
    description: "Creating space for digital freedom.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative section-screen text-foreground bg-surface"
    >
      <div className="container-main">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 w-full max-w-2xl"
          >
            <h2 className="section-title mb-6">
              THE <span className="text-tomato">ESSENCE</span>
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed">
              I don&apos;t just build websites. I engineer digital ecosystems
              where aesthetics meets raw performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card group text-center p-8 hover:border-tomato/30 hover-transition"
              >
                <h3 className="text-base font-semibold mb-2 group-hover:text-tomato hover-transition">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted group-hover:text-foreground hover-transition leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
