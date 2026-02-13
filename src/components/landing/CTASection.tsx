"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto"
        >
          <h2 className="section-title text-foreground mb-4">
            Let&apos;s Build Your Next Project Together
          </h2>
          <p className="text-foreground-muted leading-relaxed mb-8">
            Book a free consultation with our team — no obligations, no hidden
            fees. Tell us about your idea and we&apos;ll map out the best path
            to bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Our Solutions</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
