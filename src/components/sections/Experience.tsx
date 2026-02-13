"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, Mail, RotateCcw, FileDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { experiences } from "@/data";
import { useDarkMode } from "@/hooks";

const Cubes = dynamic(() => import("@/components/ui/Cubes"), { ssr: false });
import ShinyText from "@/components/ui/ShinyText";
import Stepper, { Step } from "@/components/ui/Stepper";

const typeLabel: Record<string, string> = {
  "full-time": "Full-time",
  contract: "Contract",
  freelance: "Freelance",
};

export function Experience() {
  const isDark = useDarkMode();
  const [, setActiveStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [stepperKey, setStepperKey] = useState(0);

  const handleStepChange = useCallback((step: number) => {
    setActiveStep(step);
    setCompleted(false);
  }, []);

  const handleComplete = useCallback(() => {
    setCompleted(true);
  }, []);

  return (
    <section
      id="experience"
      className="relative section-screen text-foreground overflow-hidden"
    >
      <div className="container-main relative z-10 flex flex-col my-auto py-10 lg:py-12 bg-experience-bg rounded-3xl border border-border-color/30 overflow-hidden">
        {/* Main Content: Cubes+Header left + Stepper right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-8 flex-1 min-h-0 relative z-10">
          {/* Left — Header + Cubes */}
          <div className="w-full lg:w-[45%] shrink-0 flex flex-col">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left mb-4 px-4 pt-2"
            >
              <h2 className="section-title">
                <ShinyText
                  text="THE JOURNEY"
                  speed={3}
                  color="var(--foreground)"
                  shineColor="var(--tomato)"
                  spread={120}
                />
              </h2>
              <p className="text-sm text-foreground-muted mt-1 max-w-md">
                From first lines of code to leading engineering teams — navigate
                through each chapter.
              </p>
            </motion.div>

            {/* Cubes (hidden on mobile, decorative) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center flex-1 min-h-0"
            >
              <div className="relative w-full aspect-square max-w-80">
                {/* Glow behind cubes */}
                <div className="absolute inset-0 bg-tomato/5 rounded-full blur-3xl scale-75" />
                <Cubes
                  gridSize={7}
                  maxAngle={35}
                  radius={4}
                  duration={{ enter: 0.25, leave: 0.5 }}
                  borderStyle="2px dashed rgba(255, 99, 71, 0.4)"
                  faceColor="var(--card-bg)"
                  shadow="0 0 8px rgba(255, 99, 71, 0.06)"
                  autoAnimate
                  rippleOnClick
                  rippleColor={isDark ? "#aaaaaa" : "#444444"}
                  rippleSpeed={2.5}
                />
              </div>
            </motion.div>
          </div>

          {/* Right — Stepper */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[55%] flex items-center overflow-hidden"
          >
            <Stepper
              key={stepperKey}
              initialStep={1}
              onStepChange={handleStepChange}
              onFinalStepCompleted={handleComplete}
              finalStepButtonText="Next →"
              stepCircleContainerClassName="bg-card-bg/80 backdrop-blur-sm border-border-color"
              stepContainerClassName=""
              contentClassName=""
              footerClassName=""
              className="aspect-auto! w-full"
              backButtonText="← Prev"
              nextButtonText="Next →"
              backButtonProps={{
                className:
                  "rounded-full px-4 py-1.5 text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-surface border border-border-color transition-all duration-200",
              }}
              nextButtonProps={{
                className:
                  "rounded-full px-5 py-1.5 text-sm font-medium bg-tomato text-white hover:bg-tomato-dark transition-all duration-200 shadow-lg shadow-tomato/20",
              }}
              renderStepIndicator={({ step, currentStep, onStepClick }) => (
                <CustomStepIndicator
                  step={step}
                  currentStep={currentStep}
                  onStepClick={onStepClick}
                />
              )}
            >
              {experiences.map((exp) => (
                <Step key={exp.id}>
                  <ExperienceCard experience={exp} />
                </Step>
              ))}
            </Stepper>
          </motion.div>
        </div>

        {/* Completed state overlay */}
        {completed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 z-20 flex items-center justify-center overflow-auto rounded-3xl bg-background/80 backdrop-blur-sm p-4"
          >
            <div className="text-center my-auto">
              <Mail className="w-10 h-10 text-tomato mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Impressed? Let&apos;s talk.
              </h3>
              <p className="text-sm text-foreground-muted mb-6 max-w-xs mx-auto">
                I&apos;m available for new opportunities, collaborations, and exciting projects.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="rounded-full px-6 py-2.5 text-sm font-medium bg-tomato text-white hover:bg-tomato-dark transition-colors shadow-lg shadow-tomato/20 inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </button>
                <a
                  href="/documents/resume.pdf"
                  download
                  className="rounded-full px-6 py-2.5 text-sm font-medium text-foreground border border-border-color hover:border-tomato/40 hover:text-tomato transition-all inline-flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  Resume
                </a>
                <button
                  onClick={() => {
                    setCompleted(false);
                    setActiveStep(1);
                    setStepperKey((k) => k + 1);
                  }}
                  className="rounded-full px-6 py-2.5 text-sm font-medium text-foreground border border-border-color hover:border-tomato/40 hover:text-tomato transition-all inline-flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Explore More
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ── Custom Step Indicator ── */

function CustomStepIndicator({
  step,
  currentStep,
  onStepClick,
}: {
  step: number;
  currentStep: number;
  onStepClick: (clicked: number) => void;
}) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "complete";

  return (
    <motion.button
      onClick={() => onStepClick(step)}
      className="relative cursor-pointer outline-none focus:outline-none"
      animate={status}
      initial={false}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        variants={{
          inactive: {
            scale: 1,
            backgroundColor: "var(--card-bg)",
            borderColor: "var(--border-color)",
          },
          active: {
            scale: 1,
            backgroundColor: "var(--tomato)",
            borderColor: "var(--tomato)",
          },
          complete: {
            scale: 1,
            backgroundColor: "var(--tomato)",
            borderColor: "var(--tomato)",
          },
        }}
        transition={{ duration: 0.3 }}
        className="flex h-9 w-9 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold"
      >
        {status === "complete" ? (
          <CheckMarkIcon />
        ) : status === "active" ? (
          <span className="text-white text-xs">{step}</span>
        ) : (
          <span className="text-foreground-muted text-xs">{step}</span>
        )}
      </motion.div>
      {/* Active pulse ring */}
      {status === "active" && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-tomato"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
}

function CheckMarkIcon() {
  return (
    <svg
      className="h-4 w-4 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.1, type: "tween", ease: "easeOut", duration: 0.3 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

/* ── Experience Card (step content) ── */

function ExperienceCard({ experience: exp }: { experience: (typeof experiences)[number] }) {
  return (
    <div className="space-y-4">
      {/* Period & Type badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-mono text-tomato bg-tomato/10 px-2.5 py-1 rounded-full">
          {exp.period}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-foreground-muted bg-surface px-2.5 py-1 rounded-full border border-border-color">
          {typeLabel[exp.type]}
        </span>
      </div>

      {/* Role & Company */}
      <div>
        <h3 className="text-lg font-bold text-foreground leading-tight">
          {exp.role}
        </h3>
        <div className="flex items-center gap-3 mt-1.5 text-sm text-foreground-muted flex-wrap">
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-tomato/60" />
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tomato transition-colors inline-flex items-center gap-1"
              >
                {exp.company}
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            ) : (
              exp.company
            )}
          </div>
          <span className="text-border-color">·</span>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-tomato/60" />
            {exp.location}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-foreground-muted leading-relaxed">
        {exp.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2">
        {exp.highlights.map((h) => (
          <li
            key={h}
            className="flex items-start gap-2 text-sm text-foreground"
          >
            <span className="text-tomato mt-0.5 shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {exp.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-surface border border-border-color text-foreground-muted hover:border-tomato/30 hover:text-tomato transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
