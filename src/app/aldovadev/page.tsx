import type { Metadata } from "next";
import { PersonalNavbar } from "@/components/layout";
import {
  Hero,
  Experience,
  Projects,
  Philosophy,
  Contact,
} from "@/components/sections";
import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";

export const metadata: Metadata = {
  title: "Aldovadev — Software Engineer",
  description:
    "Personal portfolio of Aldova Guswantri — Software Engineer crafting high-quality web solutions.",
};

export default function AldovadevPage() {
  return (
    <>
      <PersonalNavbar />
      <main className="relative h-dvh overflow-y-auto scroll-smooth bg-background">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="fixed inset-0 z-0 h-full w-full mask-[radial-gradient(500px_circle_at_center,white,transparent)] fill-foreground/20 stroke-foreground/20"
        />
        <Hero />
        <Experience />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
