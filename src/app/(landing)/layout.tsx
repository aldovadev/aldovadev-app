import { CompanyNavbar, Footer } from "@/components/layout";
import { RouteThemeDefault } from "@/components/ui";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RouteThemeDefault dark={false} />
      <CompanyNavbar />
      <main className="relative min-h-dvh pt-16 bg-background">
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}
