"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass, Rocket, Building2 } from "lucide-react";
import { consultingPackages } from "@/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Rocket,
  Building2,
};

export function ServicesOverview() {
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
            Services
          </p>
          <h2 className="section-title text-foreground mb-4">
            IT Consulting Packages
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            From strategic audits to full-scale IT management — pick the
            engagement model that fits your stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultingPackages.map((pkg, i) => {
            const Icon = (iconMap[pkg.icon] ?? Compass) as React.ElementType<{ className?: string }>;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "card flex flex-col",
                  pkg.highlighted && "border-tomato/40 ring-1 ring-tomato/20",
                )}
              >
                {pkg.highlighted && (
                  <span className="self-start text-xs font-semibold bg-tomato text-white px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-tomato/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-tomato" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-foreground-muted">
                      {pkg.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-foreground-muted mb-4 flex-1">
                  {pkg.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-tomato mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium h-10 px-5 transition-colors mt-auto",
                    pkg.highlighted
                      ? "bg-tomato text-white hover:bg-tomato-dark"
                      : "border border-border-color text-foreground hover:border-foreground-muted hover:bg-card-bg",
                  )}
                >
                  {pkg.cta} <ArrowRight className="w-4 h-4" />
                </Link>
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
            View all services & solutions <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
