"use client";

import { motion } from "framer-motion";
import { MessageSquareCode, Rocket, Users, Flame, Cog, Sparkles } from "lucide-react";
import ShinyText from "@/components/ui/ShinyText";
import MagicBento from "@/components/ui/MagicBento";
import type { BentoCardProps } from "@/components/ui/MagicBento";
import StickerPeel from "@/components/ui/StickerPeel";

const principles: BentoCardProps[] = [
  {
    label: <MessageSquareCode className="w-4 h-4 text-tomato" />,
    title: "Code is Communication",
    description:
      "Every function tells a story. Every variable carries meaning. Readability isn't a luxury; it's the foundation.",
  },
  {
    label: <Rocket className="w-4 h-4 text-tomato" />,
    title: "Ship First, Perfect Later",
    description:
      "I ship fast with intention — MVPs that are production-grade, not prototype-grade.",
  },
  {
    className: "lg:row-span-3 min-h-[180px] lg:min-h-0",
    children: (
      <div className="flex items-center justify-center w-full h-full scale-75 lg:scale-100">
        <StickerPeel
          imageSrc="/images/logo.png"
          width={160}
          rotate={12}
          peelDirection={0}
          shadowIntensity={0.4}
          lightingIntensity={0.15}
          disableDrag
        />
      </div>
    ),
  },
  {
    label: <Users className="w-4 h-4 text-tomato" />,
    title: "Build for the Unseen User",
    description:
      "Think about the person maintaining your code at 2AM, the user on 3G, the system under 10x load.",
  },
  {
    label: <Flame className="w-4 h-4 text-tomato" />,
    title: "Stay Uncomfortable",
    description:
      "I chase the hard problems — unfamiliar stacks, ambiguous requirements. That's where growth lives.",
  },
  {
    label: <Cog className="w-4 h-4 text-tomato" />,
    title: "Automate Everything",
    description:
      "If you do it twice, automate it. CI/CD, testing, deployments — let machines handle the repetition.",
  },
  {
    label: <Sparkles className="w-4 h-4 text-tomato" />,
    title: "Simplicity is Sophistication",
    description:
      "The best code is the code you don't write. Elegant solutions emerge from ruthless simplification.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative section-screen text-foreground overflow-hidden bg-experience-bg"
    >
      <div className="container-main relative z-10 flex flex-col justify-center py-12 lg:py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="section-title">
            <ShinyText
              text="ENGINEERING PHILOSOPHY"
              speed={3}
              color="var(--foreground)"
              shineColor="var(--tomato)"
              spread={120}
            />
          </h2>
          <p className="text-sm text-foreground-muted mt-1 max-w-lg mx-auto">
            The invisible principles behind every line I write, every system I
            design, and every problem I choose to solve.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className=""
        >
          <MagicBento
            cards={principles}
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            glowColor="255, 99, 71"
            spotlightRadius={250}
            particleCount={10}
            className="max-w-6xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
