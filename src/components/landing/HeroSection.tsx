"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import GradientBlinds from "@/components/ui/GradientBlinds";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <GradientBlinds
            gradientColors={["#ff6347", "#1a1a2e", "#16213e", "#0f3460"]}
            blindCount={12}
            noise={0.15}
            spotlightRadius={0.6}
            spotlightSoftness={1.2}
            spotlightOpacity={0.8}
            mouseDampening={0.12}
            className="opacity-40"
          />
        </ErrorBoundary>
      </div>

      <div className="relative z-10 container-main py-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-tomato uppercase tracking-widest mb-4"
          >
            IT Consulting & Tech Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title text-foreground mb-6"
          >
            Build Smarter.{" "}
            <span className="text-tomato">Scale Faster.</span>
            <br />
            Transform with Confidence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-xl mb-8"
          >
            End-to-end IT consulting, tech enablement solutions, and
            industry-based training — designed to move your business forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
