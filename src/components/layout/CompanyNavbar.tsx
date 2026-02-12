"use client";

import { useState } from "react";
import { Menu, X as MenuClose } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Navbar as NavbarRoot,
  NavLogo,
  NavItems,
  NavActions,
  MobileNav,
} from "@/components/ui/ResizableNavbar";
import { AnimatedThemeToggler } from "@/components/ui/AnimatedThemeToggler";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function CompanyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const activeHref = navItems.find((item) => {
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  })?.href ?? "/";

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NavbarRoot>
        <NavLogo>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="text-sm font-bold text-foreground tracking-tight">
              CODEWITH<span className="text-tomato">ALDOVA</span>
            </span>
          </Link>
        </NavLogo>

        <NavItems
          items={navItems}
          activeSection={activeHref}
          onItemClick={handleNavClick}
          renderLink={(item, isActive, onClick) => (
            <Link
              href={item.href}
              onClick={() => onClick(item.href)}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-tomato"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          )}
        />

        <NavActions>
          <AnimatedThemeToggler />

          <Button asChild className="hidden lg:inline-flex uppercase tracking-wider px-10">
            <Link href="/contact">Get Started</Link>
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-card-bg rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <MenuClose className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </NavActions>
      </NavbarRoot>

      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={navItems}
        activeSection={activeHref}
        onItemClick={handleNavClick}
        renderLink={(item, isActive, onClick) => (
          <Link
            href={item.href}
            onClick={() => {
              onClick(item.href);
              setIsOpen(false);
            }}
            className={`block py-2 text-sm font-medium transition-colors ${
              isActive
                ? "text-tomato"
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        )}
      >
        <Button asChild className="w-full uppercase tracking-wider mt-1" size="sm">
          <Link href="/contact">Get Started</Link>
        </Button>
      </MobileNav>
    </>
  );
}
