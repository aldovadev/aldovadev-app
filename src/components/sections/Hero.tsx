"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";
import Image from "next/image";
import LiquidEther from "@/components/ui/LiquidEther";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

const stats = [
  { value: "+5000h", label: "Of work tracked across multiple platforms" },
  { value: "25+", label: "Projects delivered since 2017 (Multiple Assets)" },
  { value: "~98%", label: "Successful Jobs Completed Rate" },
  { value: "8+", label: "Years of Professional Experience" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative section-screen bg-background overflow-hidden"
    >
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
        <ErrorBoundary>
          <LiquidEther
            colors={["#ff6347", "#ff8a65", "#ffb199", "#ff6347"]}
            mouseForce={20}
            cursorSize={100}
            resolution={0.5}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </ErrorBoundary>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container-main">
                {/* Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Column - Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                  >
                    <div className="space-y-3">
                      <p className="text-sm text-tomato font-medium">Hey, I am</p>
                      <h1 className="hero-title text-foreground leading-tight!">
                        Aldova Guswantri
                      </h1>
                    </div>

                    <p className="text-sm sm:text-base text-foreground-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
                      A Software Engineer based in Indonesia, passionate about
                      building scalable web applications and solving complex technical
                      challenges. I specialize in full-stack development, API
                      integration, and DevSecOps — crafting solutions that are
                      efficient, secure, and user-centric.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                      <button
                        onClick={() => scrollToSection("#contact")}
                        className="btn btn-primary uppercase tracking-wider"
                      >
                        Contact Me
                      </button>
                      <button
                        onClick={() => scrollToSection("#projects")}
                        className="btn btn-outline uppercase tracking-wider"
                      >
                        Check Portfolio
                      </button>
                    </div>
                  </motion.div>

                  {/* Right Column - Profile Photo */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                  >
                    <div className="relative w-72 sm:w-80 lg:w-105 aspect-23/24 rounded-xl overflow-hidden bg-card-bg">
                      <Image
                        src="/images/profile.png"
                        alt="Aldova Guswantri"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                        priority
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Stats Bar - inside container */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border-color place-items-center">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center max-w-40 mx-auto"
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 whitespace-nowrap">
                        {stat.value}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-muted leading-snug">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
      </div>
    </section>
  );
}
