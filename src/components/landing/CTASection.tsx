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
            Ready to Build Smarter?
          </h2>
          <p className="text-foreground-muted leading-relaxed mb-8">
            Book a free 30-minute discovery call with our engineering team.
            No obligations — just clarity on your next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">See All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
