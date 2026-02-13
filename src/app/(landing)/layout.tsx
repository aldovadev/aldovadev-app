import { CompanyNavbar, Footer } from "@/components/layout";

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CompanyNavbar />
      <main className="relative min-h-dvh pt-16 bg-background">
        <div className="relative z-10">{children}</div>
      </main>
      <Footer />
    </>
  );
}
