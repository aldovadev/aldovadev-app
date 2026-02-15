import { Suspense } from "react";
import type { Metadata } from "next";
import { PersonalNavbar } from "@/components/layout";
import { RouteThemeDefault } from "@/components/ui";
import {
  Hero,
  Experience,
  Projects,
  Philosophy,
  Contact,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Aldovadev — Software Engineer",
  description:
    "Personal portfolio of Aldova Guswantri — Software Engineer crafting high-quality web solutions.",
};

export default function AldovadevPage() {
  return (
    <>
      <RouteThemeDefault dark />
      <PersonalNavbar />
      <main className="relative h-dvh overflow-y-auto scroll-smooth bg-background">
        <Suspense>
          <Hero />
        </Suspense>
        <Suspense>
          <Experience />
        </Suspense>
        <Suspense>
          <Projects />
        </Suspense>
        <Suspense>
          <Philosophy />
        </Suspense>
        <Suspense>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
