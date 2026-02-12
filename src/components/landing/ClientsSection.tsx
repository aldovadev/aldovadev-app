"use client";

import { motion } from "framer-motion";
import { clients, partners } from "@/data";

export function ClientsSection() {
  const testimonials = clients.filter((c) => c.testimonial);

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
            Trusted By
          </p>
          <h2 className="section-title text-foreground mb-4">
            Clients & Partners
          </h2>
          <p className="text-foreground-muted leading-relaxed">
            We work with forward-thinking companies and technology leaders
            across industries.
          </p>
        </motion.div>

        {/* Logo Cloud */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-60">
          {[...clients, ...partners].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center w-28 h-14 rounded-lg bg-card-bg border border-border-color px-4"
            >
              <span className="text-xs font-medium text-foreground-muted text-center leading-tight">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((client, i) => (
              <motion.blockquote
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card"
              >
                <p className="text-sm text-foreground leading-relaxed mb-4 italic">
                  &ldquo;{client.testimonial}&rdquo;
                </p>
                <footer className="text-xs text-foreground-muted">
                  <span className="font-semibold text-foreground">
                    {client.contactPerson}
                  </span>
                  {client.contactRole && ` — ${client.contactRole}`}
                  <span className="block text-foreground-muted mt-0.5">
                    {client.name} · {client.industry}
                  </span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
