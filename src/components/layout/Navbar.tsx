"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";
import Image from "next/image";
import GooeyNav from "@/components/ui/GooeyNav";

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");
  const gooeyContainerRef = useRef<HTMLDivElement>(null);
  const activeSectionRef = useRef("#home");

  // Sync GooeyNav indicator to match a given section hash
  const syncGooey = useCallback((hash: string) => {
    const gooeyIndex = navItems.findIndex((item) => item.href === hash);
    if (gooeyIndex >= 0) {
      const gooeyDiv = gooeyContainerRef.current?.firstElementChild as
        | (HTMLDivElement & { __setActive?: (i: number) => void })
        | null;
      gooeyDiv?.__setActive?.(gooeyIndex);
    }
  }, []);

  // Scroll-spy: use scroll position to determine active section
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const sectionIds = [
      "home",
      ...navItems.map((item) => item.href.replace("#", "")),
    ];

    const updateActive = () => {
      setIsScrolled(main.scrollTop > 50);

      const scrollCenter = main.scrollTop + main.clientHeight / 2;
      let currentId = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollCenter) {
          currentId = id;
        }
      }

      const hash = `#${currentId}`;
      if (activeSectionRef.current !== hash) {
        activeSectionRef.current = hash;
        setActiveSection(hash);
        syncGooey(hash);
      }
    };

    main.addEventListener("scroll", updateActive, { passive: true });
    // Run once on mount to set initial state
    updateActive();

    return () => main.removeEventListener("scroll", updateActive);
  }, [syncGooey]);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent",
        )}
      >
        <div className="container-main flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2.5 group"
          >
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
          </a>

          {/* Desktop Nav — GooeyNav Center */}
          <div className="hidden lg:block bg-transparent" ref={gooeyContainerRef}>
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              initialActiveIndex={-1}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              onItemClick={(href) => handleNavClick(href)}
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground-muted hover:text-foreground hover:bg-card-bg transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* CTA Button — Desktop */}
            <button
              onClick={() => scrollToSection("#contact")}
              className="hidden lg:inline-flex btn btn-outline uppercase tracking-wider"
            >
              Hire Me
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-card-bg rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-background/95 backdrop-blur-2xl border-b border-border-color p-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "px-4 py-3 text-sm text-center rounded-lg transition-colors",
                    "text-foreground-muted hover:text-foreground hover:bg-card-bg",
                  )}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 btn btn-outline w-full uppercase tracking-wider"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
