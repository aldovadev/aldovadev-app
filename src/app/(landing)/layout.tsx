import { CompanyNavbar, Footer } from "@/components/layout";
import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CompanyNavbar />
      <main className="relative min-h-dvh pt-16 bg-background">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="fixed inset-0 z-0 h-full w-full mask-[radial-gradient(500px_circle_at_center,white,transparent)] fill-foreground/20 stroke-foreground/20"
        />
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}
