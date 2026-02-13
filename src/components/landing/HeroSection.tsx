"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

const ColorBends = dynamic(() => import("@/components/ui/ColorBends"), { ssr: false });

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          <ColorBends
            colors={["#ff6347", "#1a1a2e", "#16213e", "#0f3460"]}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            transparent={false}
            noise={0.05}
          />
        </ErrorBoundary>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8"
        >
          <span className="text-sm font-medium text-white/90">IT Consulting &amp; Tech Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-title text-white mb-6"
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
          className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-10"
        >
          End-to-end IT consulting, tech enablement solutions, and
          industry-based training — designed to move your business forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/contact">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            <Link href="/services">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
