"use client";

import { motion } from "framer-motion";
import { techCategories } from "@/data";

const pillarColors: Record<string, string> = {
  "Software Development & Engineering": "text-tomato",
  "AI & Cybersecurity": "text-tomato",
  "Infrastructure & Automation": "text-tomato",
};

function TechIcon({ name, icon, color, iconUrl }: { name: string; icon: string; color?: string; iconUrl?: string }) {
  const src = iconUrl
    ? iconUrl
    : color
      ? `https://cdn.simpleicons.org/${icon}/${color}`
      : `https://cdn.simpleicons.org/${icon}`;

  return (
    <div className="flex flex-col items-center gap-1.5 min-w-14">
      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-alt p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={name}
          width={24}
          height={24}
          loading="lazy"
          className="w-6 h-6 object-contain"
        />
      </div>
      <span className="text-[10px] text-foreground-muted text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export function TechStackSection() {
  const pillars = [...new Set(techCategories.map((c) => c.pillar))];

  return (
    <section className="py-24 bg-background">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-tomato uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="section-title text-foreground mb-4">
            Technologies Behind Modern Software Systems
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            Our teams work with modern software architectures, cloud platforms,
            and applied AI technologies to build secure, scalable systems
            designed for real-world production use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, pi) => {
            const categories = techCategories.filter(
              (c) => c.pillar === pillar,
            );
            return (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pi * 0.1 }}
                className="space-y-4"
              >
                <h3
                  className={`text-sm font-semibold text-center uppercase tracking-wider ${pillarColors[pillar] ?? "text-tomato"}`}
                >
                  {pillar}
                </h3>

                {categories.map((cat, ci) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: pi * 0.1 + ci * 0.08 }}
                    className="card"
                  >
                    <h4 className="text-sm font-semibold text-foreground text-center mb-4">
                      {cat.name}
                    </h4>
                    <div className="flex flex-wrap items-start justify-center gap-4">
                      {cat.items.map((item) => (
                        <TechIcon
                          key={item.icon}
                          name={item.name}
                          icon={item.icon}
                          color={item.color}
                          iconUrl={item.iconUrl}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
