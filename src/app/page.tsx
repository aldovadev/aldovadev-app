import { Navbar } from "@/components/layout";
import { Hero, About, Projects, Blog, Contact } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative h-dvh overflow-y-auto scroll-snap-y-mandatory bg-background">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
