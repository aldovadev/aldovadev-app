"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useDarkMode } from "@/hooks";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { ShinyButton } from "@/components/ui/ShinyButton";
import CountUp from "@/components/ui/CountUp";
import TrueFocus from "@/components/ui/TrueFocus";

const GridScan = dynamic(() => import("@/components/ui/GridScan").then((m) => m.GridScan), { ssr: false });
const Ballpit = dynamic(() => import("@/components/ui/Ballpit"), { ssr: false });
const ProfileCard = dynamic(() => import("@/components/ui/ProfileCard"), { ssr: false });
import { scrollToSection } from "@/lib/scroll";
import { LogoLoop, type LogoItem } from "@/components/ui/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPostgresql, SiDocker, SiAmazonwebservices, SiGo, SiTailwindcss, SiRedis } from "react-icons/si";

const stats = [
  { to: 25, suffix: "+", label: "Projects delivered since 2018" },
  { to: 98, prefix: "~", suffix: "%", label: "Successful Jobs Completed Rate" },
  { to: 3, suffix: "+", label: "Years of Professional Experience" },
  { to: 8, suffix: "+", label: "Years of Tech Related Experience" },
];

const techLogos: LogoItem[] = [
  { node: <SiReact className="text-foreground-muted" /> },
  { node: <SiNextdotjs className="text-foreground-muted" /> },
  { node: <SiTypescript className="text-foreground-muted" /> },
  { node: <SiNodedotjs className="text-foreground-muted" /> },
  { node: <SiPostgresql className="text-foreground-muted" /> },
  { node: <SiDocker className="text-foreground-muted" /> },
  { node: <SiAmazonwebservices className="text-foreground-muted" /> },
  { node: <SiGo className="text-foreground-muted" /> },
  { node: <SiTailwindcss className="text-foreground-muted" /> },
  { node: <SiRedis className="text-foreground-muted" /> },
];

export function Hero() {
  const isDark = useDarkMode();

  const scanColor = useMemo(
    () => {
      if (typeof window === "undefined") return "#ffcd9e";
      return getComputedStyle(document.documentElement).getPropertyValue("--scan-glow").trim() || "#ffcd9e";
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDark],
  );
  const linesColor = useMemo(
    () => {
      if (typeof window === "undefined") return "#392e4e";
      return getComputedStyle(document.documentElement).getPropertyValue("--grid-lines").trim() || "#392e4e";
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDark],
  );

  return (
    <section
      id="home"
      className="relative section-screen section-hero bg-background overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ErrorBoundary>
          {isDark ? (
            <div className="w-full h-full opacity-60">
              <GridScan
                scanColor={scanColor}
                linesColor={linesColor}
                lineThickness={1}
                gridScale={0.1}
                lineJitter={0.1}
                scanOpacity={0.4}
                enablePost={true}
                chromaticAberration={0.002}
                noiseIntensity={0.01}
                scanGlow={0.5}
                scanSoftness={2}
              />
            </div>
          ) : (
            <div className="w-full h-full opacity-50">
              <Ballpit
                count={50}
                gravity={0}
                friction={0.9975}
                wallBounce={0.95}
                followCursor={false}
                colors={[0xd4d4d4, 0xff6347, 0xd4d4d4]}
                ambientColor={0xffffff}
                ambientIntensity={0.5}
                lightIntensity={100}
                materialParams={{
                  metalness: 0.2,
                  roughness: 0.6,
                  clearcoat: 0.8,
                  clearcoatRoughness: 0.2
                }}
                minSize={0.5}
                maxSize={1}
              />
            </div>
          )}
        </ErrorBoundary>
      </div>

      <div className="relative z-10 container-main flex flex-col items-center justify-center flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center lg:pl-12"
                  >
                    <div className="space-y-4">
                      <p className="text-sm text-tomato font-medium">Hey, I am</p>
                      <TrueFocus
                        sentence="Aldova Guswantri"
                        manualMode={false}
                        blurAmount={4}
                        borderColor="var(--tomato)"
                        glowColor="color-mix(in srgb, var(--tomato) 60%, transparent)"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1.5}
                        className="hero-title text-foreground leading-tight!"
                      />
                    </div>

                    <p className="text-sm sm:text-base text-foreground-muted leading-relaxed max-w-lg mx-auto lg:mx-0">
                      A Software Engineer based in Indonesia, passionate about
                      building scalable web applications and solving complex technical
                      challenges. I specialize in full-stack development, API
                      integration, and DevSecOps — crafting solutions that are
                      efficient, secure, and user-centric.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                      <button
                        onClick={() => scrollToSection("#contact")}
                        className="h-10 px-8 text-sm font-medium uppercase tracking-wider rounded-lg bg-tomato text-white hover:bg-tomato/90 transition-colors cursor-pointer inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato"
                      >
                        Contact Me
                      </button>
                      <a href="/documents/resume.pdf" download>
                        <ShinyButton className="h-10 px-8 uppercase tracking-wider">
                          Download Resume
                        </ShinyButton>
                      </a>
                    </div>
                  </motion.div>

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
                    <ProfileCard
                      avatarUrl="/images/profile.png"
                      name="Aldova Guswantri"
                      title="Software Engineer"
                      handle="aldovadev"
                      status="Online"
                      contactText="Contact Me"
                      showUserInfo={false}
                      enableTilt={true}
                      enableMobileTilt={false}
                      behindGlowEnabled={true}
                      behindGlowColor="rgba(125, 190, 255, 0.67)"
                      innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                      onContactClick={() => scrollToSection("#contact")}
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 pt-6 w-full place-items-center">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center max-w-44 mx-auto"
                    >
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                        {stat.prefix}
                        <CountUp
                          to={stat.to}
                          duration={2}
                          separator=","
                          className="tabular-nums"
                        />
                        {stat.suffix}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground-muted leading-snug">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 w-full">
                  <LogoLoop
                    logos={techLogos}
                    speed={80}
                    logoHeight={26}
                    gap={48}
                    pauseOnHover
                    fadeOut
                    className="opacity-60"
                    ariaLabel="Tech stack"
                  />
                </div>
      </div>
    </section>
  );
}
